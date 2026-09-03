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
    title: "FinanceTrackerKu — AI Financial Assistant",
    category: "Full-Stack & AI",
    featured: true,
    description:
      "A production-grade self-hosted financial analytics & budget platform featuring multi-intent AI assistant, automated receipt OCR extraction, and real-time wallet synchronization.",
    highlights: [
      "Natural language expense logging & intent routing via custom AI engine",
      "Asynchronous receipt processing worker with Celery & Redis queue",
      "S3-compatible MinIO object storage with pre-signed upload pipelines",
      "Dockerized microservices deployed on high-availability Cloudflare Tunnel",
    ],
    image: img("financetrackerku"),
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Celery", "Redis", "MinIO", "Docker", "Tailwind CSS"],
    demo: "https://ngitung.dema.web.id",
    github: "https://github.com/amedfg/finance-tracker",
  },
  {
    title: "Bodha AI API Service",
    category: "Full-Stack & AI",
    featured: true,
    description:
      "Enterprise AI middleware providing conversational AI, intelligent document screening, resume parsing, and private knowledge retrieval.",
    highlights: [
      "Multi-provider LLM routing via LiteLLM & self-hosted Ollama models",
      "High-throughput document analysis with streaming token responses",
      "Secure asset management backed by PostgreSQL & MinIO object storage",
    ],
    image: img("bodha-ai"),
    tech: ["Flask", "Python", "Ollama", "LiteLLM", "PostgreSQL", "MinIO", "Docker"],
    demo: "",
    github: "",
  },
  {
    title: "Teletrace Distributed API",
    category: "Backend & Architecture",
    featured: true,
    description:
      "High-scale REST API designed with a strict 4-Layer Domain-Driven Design (DDD) architecture, enterprise OIDC auth, and live event broadcasting.",
    highlights: [
      "Modular 4-Layer DDD architecture (Domain, Application, Infrastructure, UI)",
      "Centralized identity and SSO authentication via Zitadel OIDC",
      "Real-time event broadcasting over WebSocket channels",
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
      "Enterprise project portfolio management application tracking multi-tier tasks, budget burn rates, S-curve projections, and risk assessments.",
    highlights: [
      "Automated financial health computation & budget variance alerts",
      "Interactive S-Curve timeline visualization for executive stakeholder reporting",
      "Granular RBAC and SSO authentication powered by Zitadel",
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
      "A flexible drag-and-drop builder backend managing deeply nested component hierarchies with schema-less persistence.",
    highlights: [
      "Recursive JSON document tree modeling in MongoDB for nested component trees",
      "Sub-50ms serialized document delivery optimized for real-time canvas rendering",
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
      "Nationwide enterprise asset tracking platform managing physical equipment lifecycle, maintenance schedules, and inter-branch transfers across Indonesia.",
    highlights: [
      "Engineered reliable asset audit trail with automated verification workflows",
      "Optimized relational SQL queries handling tens of thousands of inventory records",
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
      "Computer vision classification pipeline detecting driver seat belt compliance under varying lighting conditions using Deep Convolutional Neural Networks.",
    highlights: [
      "Transfer learning with ResNet50 architecture reaching >93% validation accuracy",
      "Custom image preprocessing & augmentation pipeline for challenging low-light angles",
    ],
    image: img("seatbelt-cnn"),
    tech: ["Python", "TensorFlow", "Keras", "CNN", "ResNet50", "OpenCV"],
    demo: "",
    github: "",
  },
];
