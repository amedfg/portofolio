export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Backend Engineer",
    company: "PT. Bodha Padma Nawadhya",
    duration: "Oct 2025 — Present",
    location: "Jakarta (On-site)",
    description:
      "Building and maintaining multiple backend systems and APIs across diverse projects using Laravel (PHP) and Flask (Python).",
    highlights: [
      "Developed Bodha AI API — a Flask service for AI chat, document processing, file management, and CV/resume screening, integrating Ollama and LiteLLM with PostgreSQL and MinIO",
      "Designed a 4-layer Domain-Driven Design architecture for the Teletrace API (Laravel 12) with Zitadel OIDC auth, auto-generated CRUD scaffolding, and real-time WebSocket broadcasting",
      "Contributed to an Executive Dashboard (Laravel 12 + Nova 5) for tracking projects, hierarchical tasks, budgets, and S-curve / health / risk reporting with SSO via Zitadel",
      "Collaborated with front-end teams on API integration, conducted code reviews, and ran CI/CD pipelines on GitLab",
    ],
  },
  {
    role: "Backend Developer",
    company: "PT. Cloufina Nata Karya",
    duration: "Jan 2025 — Jul 2025",
    location: "Jakarta (Remote)",
    description:
      "Built server-side logic, databases, and APIs for scalable web applications through collaborative development and clean code practices.",
    highlights: [
      "Developed secure, efficient RESTful APIs and backend services powering web and mobile applications",
      "Managed the full database lifecycle using PostgreSQL for transactional data and MongoDB for flexible, schema-less content",
      "Led backend for Dynamic Web Builder — a no-code platform with MongoDB-modeled dynamic documents and performant save/load APIs supporting real-time drag-and-drop",
      "Coordinated with a co-developer using agile methodologies, conducting thorough code reviews and supporting deployment",
    ],
  },
  {
    role: "Fullstack Developer (Freelancer)",
    company: "Sasfy",
    duration: "Jul 2024 — Jan 2025",
    location: "Jakarta (Remote)",
    description:
      "Delivered web applications end-to-end with a Laravel backend and a Next.js + Tailwind CSS frontend.",
    highlights: [
      "Developed multiple web applications using Laravel as the backend and Next.js with Tailwind CSS as the frontend",
      "Managed code repositories on GitHub, performed regular updates, and resolved git conflicts",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Aido Health Indonesia",
    duration: "Jan 2024 — Apr 2024",
    location: "Jakarta (On-site)",
    description:
      "Developed web-based internal training applications using PHP with the Laravel framework.",
    highlights: [
      "Designed and implemented database structures using PostgreSQL",
      "Integrated a photo upload feature, storing images on AWS S3",
      "Managed code repositories using Bitbucket, performed regular updates, and resolved git conflicts",
    ],
  },
  {
    role: "IT Developer Intern",
    company: "PT. United Tractors Tbk",
    duration: "Aug 2022 — Dec 2022",
    location: "Jakarta (On-site)",
    description:
      "Created a web-based asset inventory management system as a Backend Engineer using PHP with the CodeIgniter 4 framework.",
    highlights: [
      "Built a large-scale web service application serving company users across Indonesia",
      "Utilized PHPMyAdmin for database management",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Unit Transfusi Darah Pusat PMI",
    duration: "Jan 2022 — Apr 2022",
    location: "Jakarta (On-site)",
    description:
      "Created a web-based soft-skill training registration system as a full-stack engineer.",
    highlights: [
      "Designed the application in Figma and built the backend with PHP (CodeIgniter 4) and frontend with Bootstrap 4",
      "Managed the database using PHPMyAdmin",
      "Used GitLab for application version control and collaboration with supervisors",
    ],
  },
];
