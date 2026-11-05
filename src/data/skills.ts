import type { IconType } from "react-icons";
import {
  SiBun,
  SiTypescript,
  SiGo,
  SiPhp,
  SiPython,
  SiLaravel,
  SiCodeigniter,
  SiFlask,
  SiFastapi,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiMongodb,
  SiMinio,
  SiTensorflow,
  SiKeras,
  SiOllama,
  SiGit,
  SiGitlab,
  SiBitbucket,
  SiDocker,
  SiLinux,
  SiCloudflare,
  SiFigma,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  items: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "PHP", icon: SiPhp, level: 95, color: "#777BB4" },
      { name: "Python", icon: SiPython, level: 88, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, level: 85, color: "#3178C6" },
      { name: "Go", icon: SiGo, level: 72, color: "#00ADD8" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Laravel", icon: SiLaravel, level: 95, color: "#FF2D20" },
      { name: "CodeIgniter 4", icon: SiCodeigniter, level: 85, color: "#EF4223" },
      { name: "Flask", icon: SiFlask, level: 88, color: "#000000" },
      { name: "FastAPI", icon: SiFastapi, level: 82, color: "#009688" },
      { name: "Bun", icon: SiBun, level: 70, color: "#000000" },
    ],
  },
  {
    title: "Database & Storage",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, level: 92, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, level: 88, color: "#4479A1" },
      { name: "SQLite", icon: SiSqlite, level: 90, color: "#003B57" },
      { name: "Redis", icon: SiRedis, level: 84, color: "#DC382D" },
      { name: "MongoDB", icon: SiMongodb, level: 82, color: "#47A248" },
      { name: "MinIO", icon: SiMinio, level: 78, color: "#C72E49" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs, level: 80, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "#38BDF8" },
      { name: "Bootstrap", icon: SiBootstrap, level: 82, color: "#7952B3" },
      { name: "HTML & CSS", icon: SiHtml5, level: 88, color: "#E34F26" },
    ],
  },
  {
    title: "AI / Machine Learning",
    items: [
      { name: "TensorFlow", icon: SiTensorflow, level: 78, color: "#FF6F00" },
      { name: "Keras", icon: SiKeras, level: 75, color: "#D00000" },
      { name: "Ollama", icon: SiOllama, level: 80, color: "#000000" },
      { name: "LiteLLM", icon: SiPython, level: 80, color: "#3776AB" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Docker", icon: SiDocker, level: 88, color: "#2496ED" },
      { name: "Linux / systemd", icon: SiLinux, level: 86, color: "#FCC624" },
      { name: "Cloudflare", icon: SiCloudflare, level: 84, color: "#F38020" },
      { name: "Git", icon: SiGit, level: 90, color: "#F05032" },
      { name: "GitLab CI/CD", icon: SiGitlab, level: 82, color: "#FC6D26" },
      { name: "Bitbucket", icon: SiBitbucket, level: 78, color: "#0052CC" },
      { name: "Figma", icon: SiFigma, level: 72, color: "#F24E1E" },
    ],
  },
];
