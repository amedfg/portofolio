export interface Project {
  title: string;
  category: "Full-Stack & AI" | "Backend & Architecture" | "Enterprise & System";
  featured?: boolean;
  description: string;
  highlights: string[];
  image: string;
  tech: string[];
  demo?: string;
  github?: string;
}

const img = (slug: string) => `/projects/${slug}.svg`;

export const PROJECTS: Project[] = [
  {
    title: "DuitKu — Personal Finance & Cashflow Engine",
    category: "Full-Stack & AI",
    featured: true,
    description:
      "Self-hosted personal finance dashboard & PWA built with Next.js 15, native SQLite, and Swiss FinTech styling. Tracks daily cashflow and dynamic 25th–24th salary cycles.",
    highlights: [
      "Dynamic cycle engine automatically calculates active 25th–24th salary periods and daily safe-to-spend limits",
      "Interactive cubic Bézier spline area charts and 2D calendar matrix heatmap with zero chart library overhead",
      "Zero-dependency native node:sqlite backend with single-user signed cookie session authentication",
    ],
    image: img("duitku"),
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "SQLite", "PWA", "systemd"],
    demo: "",
    github: "",
  },
  {
    title: "ManhwaKu — Modern Webtoon & Manga Reader PWA",
    category: "Full-Stack & AI",
    featured: true,
    description:
      "High-performance Progressive Web App for reading webtoons and manga, connected to self-hosted Suwayomi Tachidesk backend with Direct Turbo CDN bypass.",
    highlights: [
      "Sub-100ms reading experience bypassing Suwayomi thread locks via direct scanlator edge CDN streaming and Nginx multi-tier caching",
      "Real-time Extension & Source Health Monitor with automated Cloudflare anti-bot detection across active scanlators",
      "Granular panel-level progress tracking, multi-device cloud bookmark sync, and zero-layout-shift resume",
    ],
    image: img("manhwaku"),
    tech: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "GraphQL", "Suwayomi", "Nginx", "Docker", "PWA"],
    demo: "https://manhwa.dema.web.id",
    github: "",
  },
  {
    title: "MakanKu — Jakarta Selatan Culinary Curator",
    category: "Full-Stack & AI",
    featured: true,
    description:
      "Automated culinary discovery platform curating 1,500+ restaurants, coffee shops, and street food across South Jakarta with headless Google Maps crawling, smart roulette, and bookmarks.",
    highlights: [
      "Playwright stealth feed scraper running automated low-and-slow rotation into SQLite every 2 hours",
      "Interactive 'Makan Apa Hari Ini? 🎲' culinary roulette modal and persistent local wishlist bookmarks",
      "Real-time Haversine distance calculations relative to user GPS or Ciganjur / Moh. Kahfi center",
    ],
    image: img("makanku"),
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "SQLite", "Playwright", "systemd"],
    demo: "https://makan.dema.web.id",
    github: "",
  },
  {
    title: "ChatKu — Self-Hosted AI Assistant & Document Hub",
    category: "Full-Stack & AI",
    featured: true,
    description:
      "Clean, responsive AI assistant web application connected to self-hosted 9Router LLM gateway, supporting multimodal vision models, document parsing, and full-text search.",
    highlights: [
      "Multimodal document ingestion: PDF, DOCX, and image OCR text extraction for LLM context injection",
      "Indonesian & English full-text search using PostgreSQL pg_trgm GIN indexes, dropping search latency to ~4ms",
      "Resilient SSE streaming with automatic keep-alive retry and pinned conversation organization",
    ],
    image: img("chatku"),
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "9Router", "Docker"],
    demo: "https://chat.dema.web.id",
    github: "",
  },
  {
    title: "Dema MiniPC Hub — Infrastructure & Edge Telemetry",
    category: "Backend & Architecture",
    featured: true,
    description:
      "Unified self-hosted observability dashboard tracking real-time hardware telemetry, service mesh health, and automated system reliability on an Intel Mini PC.",
    highlights: [
      "Direct kernel sysfs sampling of Intel RAPL package-0 energy counters for sub-watt real-time power consumption tracking",
      "Real-time service health tracking across systemd user daemons, Docker containers, and Cloudflare Zero Trust routes",
      "Automated reliability monitor with health telemetry for nightly SQLite backups, system watchdog timers, and Telegram alerts",
    ],
    image: img("hub-demaminipc"),
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Linux sysfs", "Docker", "systemd", "Cloudflare"],
    demo: "https://monitoring.dema.web.id",
    github: "",
  },
  {
    title: "Bodha AI API Service",
    category: "Full-Stack & AI",
    featured: false,
    description:
      "Internal AI service at my current job: chat, document screening, and resume parsing for the company's products.",
    highlights: [
      "Routes between self-hosted Ollama models and cloud providers via LiteLLM",
      "Streams token-by-token responses for chat and document analysis",
      "Files and embeddings stored in PostgreSQL + MinIO",
    ],
    image: img("bodha-ai"),
    tech: ["Flask", "Python", "Ollama", "LiteLLM", "PostgreSQL", "MinIO", "Docker"],
    demo: "",
    github: "",
  },
  {
    title: "Teletrace Distributed API",
    category: "Backend & Architecture",
    featured: false,
    description:
      "Laravel API structured as 4-layer DDD (Domain, Application, Infrastructure, Interface) with SSO and WebSocket events.",
    highlights: [
      "Strict 4-layer DDD separation — domain logic has zero framework imports",
      "Single sign-on across company tools via Zitadel OIDC",
      "WebSocket broadcasting for live status updates",
    ],
    image: img("teletrace"),
    tech: ["Laravel 12", "PHP 8.3", "Domain-Driven Design", "Zitadel OIDC", "WebSocket", "PostgreSQL"],
    demo: "",
    github: "",
  },
  {
    title: "Executive Portfolio & Risk Dashboard",
    category: "Enterprise & System",
    description:
      "Project management dashboard for executives: task hierarchies, budget burn, S-curve progress, and risk flags.",
    highlights: [
      "Auto-computed budget variance with alert thresholds",
      "S-Curve timeline built with Chart.js for stakeholder reports",
      "Role-based access on top of Zitadel SSO",
    ],
    image: img("exec-dashboard"),
    tech: ["Laravel 12", "Laravel Nova 5", "PostgreSQL", "Zitadel SSO", "Chart.js"],
    demo: "",
    github: "",
  },
  {
    title: "Dynamic Visual Web Builder Core",
    category: "Full-Stack & AI",
    description:
      "Backend for a drag-and-drop page builder: nested component trees stored as JSON documents in MongoDB.",
    highlights: [
      "Recursive document tree modeling for arbitrarily nested blocks",
      "Serialized documents served in under 50ms for canvas rendering",
    ],
    image: img("web-builder"),
    tech: ["Laravel", "MongoDB", "REST API", "Next.js", "TypeScript"],
    demo: "",
    github: "",
  },
  {
    title: "United Tractors Asset Inventory System",
    category: "Enterprise & System",
    description:
      "Asset inventory for heavy equipment across branches in Indonesia: lifecycle tracking, maintenance schedules, inter-branch transfers.",
    highlights: [
      "Audit trail with automated verification on every asset movement",
      "Tuned SQL queries over tens of thousands of inventory records",
    ],
    image: img("asset-inventory"),
    tech: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap", "Linux"],
    demo: "",
    github: "",
  },
  {
    title: "Driver Safety Vision (Seat Belt CNN)",
    category: "Full-Stack & AI",
    description:
      "CNN classifier that detects whether a driver is wearing a seat belt, trained to hold up in low-light cabin footage.",
    highlights: [
      "ResNet50 transfer learning, >93% validation accuracy",
      "Custom augmentation pipeline for low-light and odd angles",
    ],
    image: img("seatbelt-cnn"),
    tech: ["Python", "TensorFlow", "Keras", "CNN", "ResNet50", "OpenCV"],
    demo: "",
    github: "",
  },
];
