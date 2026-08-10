export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
}

// Using picsum.photos as a deterministic random-image source
// (source.unsplash.com/random has been deprecated for embedding)
const img = (seed: string) => `https://picsum.photos/seed/${seed}/800/600`;

export const PROJECTS: Project[] = [
  {
    title: "Bodha AI API",
    description:
      "A Flask-based AI service providing AI chat, document processing, file management, and CV/resume screening — powered by Ollama and LiteLLM with PostgreSQL and MinIO storage.",
    image: img("bodha-ai"),
    tech: ["Flask", "Python", "Ollama", "LiteLLM", "PostgreSQL", "MinIO"],
    demo: "",
    github: "",
  },
  {
    title: "Teletrace API",
    description:
      "A Laravel 12 REST API built on a 4-layer Domain-Driven Design architecture with Zitadel OIDC authentication, auto-generated CRUD scaffolding, and real-time WebSocket broadcasting.",
    image: img("teletrace"),
    tech: ["Laravel 12", "PHP", "DDD", "Zitadel OIDC", "WebSocket", "PostgreSQL"],
    demo: "",
    github: "",
  },
  {
    title: "Executive Dashboard",
    description:
      "A Laravel 12 + Nova 5 application for tracking projects, hierarchical tasks, and budgets, with S-curve, health, and risk reporting — secured with SSO via Zitadel.",
    image: img("exec-dashboard"),
    tech: ["Laravel 12", "Laravel Nova 5", "PostgreSQL", "Zitadel SSO"],
    demo: "",
    github: "",
  },
  {
    title: "Dynamic Web Builder",
    description:
      "A no-code platform enabling visual design of complex nested layouts, with dynamic document structures modeled in MongoDB and performant APIs supporting real-time drag-and-drop.",
    image: img("web-builder"),
    tech: ["Laravel", "MongoDB", "REST API", "Next.js"],
    demo: "",
    github: "",
  },
  {
    title: "Asset Inventory Management System",
    description:
      "A large-scale web-based asset inventory management system serving United Tractors users across Indonesia, built as a Backend Engineer with CodeIgniter 4.",
    image: img("asset-inventory"),
    tech: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap"],
    demo: "",
    github: "",
  },
  {
    title: "Seat Belt Image Classification",
    description:
      "Undergraduate thesis: classifying seat-belt use in car drivers using a Convolutional Neural Network with the ResNet50 architecture.",
    image: img("seatbelt-cnn"),
    tech: ["Python", "TensorFlow", "Keras", "CNN", "ResNet50"],
    demo: "",
    github: "",
  },
];
