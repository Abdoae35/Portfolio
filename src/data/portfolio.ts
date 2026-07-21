/**
 * Centralized data for all portfolio sections.
 * Edit this file to update project details, skills, or contact links.
 */

// ── Navigation ──────────────────────────────────

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Projects ────────────────────────────────────

export interface Project {
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  /** Link to live demo or app store — leave empty string if none */
  liveUrl: string;
  /** Link to source code — leave empty string if private */
  sourceUrl: string;
  /** Placeholder flag for projects you haven't filled in yet */
  isPlaceholder?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "FitPanel",
    tagline: "SaaS platform for online fitness coaches",
    description:
      "A comprehensive Blazor Server application built on .NET 9 that gives fitness coaches a centralized dashboard to manage clients, track subscriptions, and deliver personalized workout and diet plans — complete with professional PDF exports.",
    techStack: [
      "Blazor Server",
      ".NET 9",
      "C#",
      "PDFShift API",
      "SQL Server",
    ],
    highlights: [
      "Engineered full English/Arabic localization using .resx resource files, enabling seamless RTL layout switching at runtime.",
      "Redesigned PDF exports by replacing emoji-based icons with inline SVGs, producing a polished, print-ready athletic aesthetic.",
      "Applied OWASP security best practices across the application — input validation, anti-CSRF tokens, and secure authentication flows.",
    ],
    // TODO: Replace with your actual URLs
    liveUrl: "",
    sourceUrl: "https://github.com/yourusername/fitpanel",
  },
  {
    title: "se7aty",
    tagline: "Mobile health companion app",
    description:
      "A Flutter mobile application designed around clean architecture principles, providing a smooth, native-feel experience backed by Firebase for authentication and real-time data sync.",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Dio",
      "Cubit / BlocBuilder",
    ],
    highlights: [
      "Implemented structured state management with Cubit and BlocBuilder, keeping UI logic testable and decoupled from business rules.",
      "Configured Firebase services end-to-end — authentication, Firestore, and analytics — with environment-specific build flavors.",
      "Generated polished adaptive app icons across all densities using flutter_launcher_icons, ensuring pixel-perfect branding on both platforms.",
    ],
    // TODO: Replace with your actual URLs
    liveUrl: "",
    sourceUrl: "https://github.com/yourusername/se7aty",
  },
  {
    // ── PLACEHOLDER: Add your next project here ──
    title: "Project 3",
    tagline: "Your next project goes here",
    description:
      "Describe the problem this project solves and the approach you took. Keep it concise but specific — recruiters and engineers both read this.",
    techStack: ["Tech 1", "Tech 2", "Tech 3"],
    highlights: [
      "Replace this with a specific technical challenge you solved.",
      "Add another highlight about architecture or performance.",
      "One more highlight about a feature or integration.",
    ],
    liveUrl: "",
    sourceUrl: "",
    isPlaceholder: true,
  },
];

// ── Skills ──────────────────────────────────────

export interface SkillCategory {
  category: string;
  icon: string; // Emoji used as a visual marker
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Backend",
    icon: "⚙️",
    skills: [".NET", "Blazor", "Node.js", "Express"],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: ["Flutter"],
  },
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["React", "Next.js"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "SQL"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Git", "Linux / Unix CLI"],
  },
];

// ── Contact / Social Links ──────────────────────

export interface SocialLink {
  label: string;
  href: string;
  /** Accessible name for screen readers */
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    // TODO: Replace with your real email
    href: "mailto:your.email@example.com",
    ariaLabel: "Send an email",
  },
  {
    label: "GitHub",
    // TODO: Replace with your GitHub profile URL
    href: "https://github.com/yourusername",
    ariaLabel: "View GitHub profile",
  },
  {
    label: "LinkedIn",
    // TODO: Replace with your LinkedIn profile URL
    href: "https://linkedin.com/in/yourusername",
    ariaLabel: "View LinkedIn profile",
  },
];

// ── Hero-specific URLs ──────────────────────────

/** TODO: Replace with your actual resume file path (e.g., "/resume.pdf") */
export const RESUME_URL = "/resume.pdf";

/** TODO: Replace with your GitHub profile URL */
export const GITHUB_URL = "https://github.com/yourusername";

/** TODO: Replace with your LinkedIn profile URL */
export const LINKEDIN_URL = "https://linkedin.com/in/yourusername";
