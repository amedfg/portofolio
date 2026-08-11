#!/usr/bin/env python3
"""Deploy Cloudflare tunnel ingress + DNS for portofolio. Reads secrets from env, not source."""
import os, urllib.request, json, ssl

token = os.environ["CF_API_TOKEN"]
account_id = os.environ["CF_ACCOUNT_ID"]
zone_id = os.environ["CF_ZONE_ID"]
tunnel_id = os.environ["CF_TUNNEL_ID"]
HOST = os.environ.get("CF_HOST", "portofolio.dema.web.id")
SERVICE = os.environ.get("CF_SERVICE", "http://192.168.18.25:3001")

def cf(path, method="GET", body=None):
    req = urllib.request.Request(f"https://api.cloudflare.com/client/v4{path}", method=method)
    req.add_header("Authorization", f"Bearer {token}")
    req.add_header("Content-Type", "application/json")
    data = json.dumps(body).encode() if body is not None else None
    try:
        with urllib.request.urlopen(req, data=data, context=ssl.create_default_context()) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        print(f"HTTP {e.code} {method} {path}: {e.read().decode()}")
        return {"success": False}

# 1. tunnel ingress
res = cf(f"/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations")
cfg = res["result"]["config"]
ing = [r for r in cfg["ingress"] if r.get("hostname") != HOST]
catch = ing.pop() if ing and ing[-1].get("service") == "http_status:404" else None
ing.append({"hostname": HOST, "service": SERVICE})
if catch: ing.append(catch)
cfg["ingress"] = ing
r = cf(f"/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations", "PUT", {"config": cfg})
print("tunnel:", "OK" if r.get("success") else r)

# 2. DNS CNAME
recs = cf(f"/zones/{zone_id}/dns_records?type=CNAME&name={HOST}")["result"]
body = {"type": "CNAME", "name": HOST, "content": f"{tunnel_id}.cfargotunnel.com", "proxied": True}
r = cf(f"/zones/{zone_id}/dns_records/{recs[0]['id']}", "PUT", body) if recs else cf(f"/zones/{zone_id}/dns_records", "POST", body)
print("dns:", "OK" if r.get("success") else r)