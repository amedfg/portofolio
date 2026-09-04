export async function POST(req: Request) {
  const { name, email, message } = await req.json().catch(() => ({}));

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim() ||
    message.length > 4000 ||
    name.length > 100 ||
    email.length > 200
  ) {
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return Response.json({ error: "Not configured" }, { status: 500 });
  }

  const text = [
    "✉️ Pesan baru dari portfolio",
    "",
    `Nama: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!res.ok) {
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
