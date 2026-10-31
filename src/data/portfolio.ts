/**
 * Centralized data for all portfolio sections.
 * Updated directly from Abdelrahman A. Elsheref's CV.
 */

// ── Personal Info ──────────────────────────────

export const PERSONAL = {
  name: "Abdelrahman A. Elsheref",
  title: "Final-year CS Student & Software Engineer",
  location: "6th of October, Egypt",
  phone: "+20 1143850502",
  email: "abdelrahman3535.elsheref@gmail.com",
  github: "https://github.com/Abdoae35",
  linkedin: "https://www.linkedin.com/in/abdelrahman-elsheref/",
  resumeUrl: "/generated/cv.pdf",
};

// ── Navigation ──────────────────────────────────

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
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
  liveUrl: string;
  sourceUrl: string;
  isPlaceholder?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Campeones – Multi-Branch Gym Management System",
    tagline: "Multi-branch gym operations backend",
    description:
      "An in-development gym management backend that coordinates memberships, attendance, staff, and financial operations across branches through a layered ASP.NET Core API.",
    techStack: ["C#", ".NET 10", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "ASP.NET Core Identity", "JWT", "xUnit", "React (separate frontend)"],
    highlights: [
      "Combines role permissions, per-user allow/deny overrides, and branch-scoped authorization using ASP.NET Core Identity and JWT.",
      "Manages membership plans, renewals, freezes, and check-ins with subscription and session-balance validation.",
      "Coordinates sales, installments, refunds, shared cash drawers, and shift reconciliation using transactions and row locks; supported payment and refund retries are idempotent.",
      "Includes employee and coach management, lead follow-ups, and audit records for sensitive operations.",
      "Uses PostgreSQL and EF Core, with xUnit API, permission, financial workflow, and concurrency tests.",
    ],
    liveUrl: "",
    sourceUrl: "",
  },
  {
    title: "FitPanel",
    tagline: "SaaS platform for online fitness coaches",
    description:
      "A Blazor Server coaching platform that brings client profiles, subscription tracking, personalized nutrition plans, and workout programs into one dashboard.",
    techStack: [
      "Blazor Server",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "PDFShift API",
      "CalorieNinjas API",
    ],
    highlights: [
      "Builds diet plans with meals, alternatives, and macro totals, alongside workout splits with exercises, warm-ups, and cardio.",
      "Saves reusable coach-specific plan templates and integrates CalorieNinjas for nutrition lookup.",
      "Generates branded diet and workout PDFs through PDFShift, with configurable themes and coach details.",
      "Uses Admin and Coach access policies, an EF Core relational model, and English/Arabic localization with RTL support.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/FitPanel",
  },
  {
    title: "JobBoard",
    tagline: "Full-stack job platform connecting recruiters & job seekers",
    description:
      "A Next.js job board connecting recruiters and job seekers, with separate dashboards for posting vacancies, reviewing applications, and tracking job searches.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase Auth",
      "Tailwind CSS",
    ],
    highlights: [
      "Supports job creation, editing, and status changes; recruiters can review applications and update their status.",
      "Lets job seekers search and save vacancies, apply with a cover letter, track applications, and withdraw pending submissions.",
      "Uses Supabase Auth, role-aware route guards, and PostgreSQL row-level security policies for profiles, jobs, applications, and saved jobs.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/job_board",
  },
  {
    title: "Food Trucks Platform",
    tagline: "End-to-end ordering platform for customers & food truck owners",
    description:
      "A food truck ordering application that connects customers browsing menus and scheduling pickups with owners managing availability, menus, and orders.",
    techStack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Knex.js",
      "jQuery",
      "RESTful API",
    ],
    highlights: [
      "Provides customer and truck-owner API routes for menus, carts, orders, and user accounts using Express and Knex with PostgreSQL.",
      "Validates menu availability and prevents a cart from combining items from different trucks before order placement.",
      "Supports scheduled pickups, customer order history, and owner updates through pending, preparing, ready, and completed statuses.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/FoodTruckGIU",
  },
  {
    title: "Afforestation Achievement System",
    tagline: "Plantation progress & environmental management platform",
    description:
      "A web application that replaces manual spreadsheet consolidation with centralized records and reports for planting activities across locations and time periods.",
    techStack: [
      "ASP.NET Core MVC",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
      "C#",
      "ClosedXML",
    ],
    highlights: [
      "Separates the MVC frontend from a layered Web API and EF Core data access, with role-based Admin, User, and Viewer workflows.",
      "Records plant types, locations, quantities, and planting dates, with search and paginated results.",
      "Summarizes planting activity and exports date-range reports to Excel using ClosedXML.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/AffrostationPanel",
  },
  {
    title: "Hospital Clinic Management System",
    tagline: "Comprehensive ASP.NET Core MVC (.NET 9) medical facility management platform",
    description:
      "An ASP.NET Core MVC application that centralizes patient records, doctor schedules, appointments, medical records, and billing for a clinic.",
    techStack: [
      "ASP.NET Core MVC",
      ".NET 9",
      "Entity Framework Core",
      "SQL Server",
      "ASP.NET Core Identity",
      "Bootstrap 5",
      "Chart.js",
      "FullCalendar.js",
      "Serilog",
      "EPPlus",
    ],
    highlights: [
      "Uses a 12-entity relational model and ASP.NET Core Identity roles for administrators, doctors, receptionists, and patients.",
      "Checks doctor schedules and booking conflicts, tracks appointment statuses, and generates invoices when appointments are completed.",
      "Connects medical records, diagnoses, and prescriptions to appointments, with role-restricted access.",
      "Provides calendar and analytics views plus appointment and revenue reporting with Excel export through EPPlus.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/ClinicManagment",
  },
];

// ── Experience & Education ──────────────────────

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Cybersecurity Training",
    company: "National Telecom Regulatory Authority (NTRA)",
    location: "Smart Village, Egypt",
    period: "Aug 2026",
    type: "Training",
    bullets: ["Completed practical training covering cybersecurity fundamentals and security concepts."],
  },
  {
    role: "Simulation Team Member",
    company: "Formula Student AI University Racing Team",
    location: "Egypt",
    period: "Jul 2026 – Present",
    type: "Student activity",
    bullets: [
      "Worked on autonomous racing simulation tasks using Python, ROS, Gazebo, and RViz in Docker-based Linux environments.",
      "Collaborated on simulation testing, troubleshooting, and technical discussions.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "DEPI (Digital Egypt Pioneers Initiative)",
    location: "Egypt",
    period: "Nov 2025 – Jul 2026",
    type: "Apprenticeship",
    bullets: [
      "Developed cross-platform mobile applications using Flutter and Dart, focusing on responsive interfaces and API integration.",
      "Worked with state management, authentication, application architecture, and backend integration.",
    ],
  },
  {
    role: "Freelance Software Engineer",
    company: "Mostaqel & Upwork",
    location: "Remote",
    period: "2024 – Present",
    type: "Freelance",
    bullets: [
      "Delivered full-stack web projects for clients using JavaScript/TypeScript, React, Node.js, and .NET.",
      "Built and consumed REST APIs, working directly with clients from initial requirements to production deployment.",
      "Ensured high code quality, security practices, and responsive design across client deliverables.",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    company: "DEPI (Digital Egypt Pioneers Initiative)",
    location: "Egypt",
    period: "Oct 2024 – May 2025",
    type: "Apprenticeship",
    bullets: [
      "Developed full-stack web applications and RESTful APIs using C#, ASP.NET Core, Entity Framework Core, and SQL Server.",
      "Collaborated on team projects using OOP, database design, Git, debugging, and problem-solving skills.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "InnoTech Egypt",
    location: "Egypt",
    period: "Fall 2024",
    type: "Internship",
    bullets: ["Gained hands-on experience with .NET and Blazor, RabbitMQ messaging, and Redis caching."],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  graduationYear: string;
}

export const EDUCATION: EducationItem = {
  degree: "Bachelor's in Computer Science",
  institution: "Tanta University",
  location: "Tanta, Egypt",
  period: "Expected Graduation: 2027",
  gpa: "3.4 / 4.0",
  graduationYear: "2027",
};

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: ".NET Full-Stack Program",
    issuer: "DEPI (Digital Egypt Pioneers Initiative)",
    year: "2024 – 2025",
  },
  {
    title: "Flutter Development",
    issuer: "DEPI (Digital Egypt Pioneers Initiative)",
    year: "2025 – 2026",
  },
  {
    title: "Cybersecurity Training",
    issuer: "National Telecom Regulatory Authority (NTRA)",
    year: "2026",
  },
  {
    title: "Competitive Programming – ECPC Competition",
    issuer: "Egyptian Collegiate Programming Contest",
    year: "2024",
  },
  {
    title: "Complete SQL Mastery",
    issuer: "Code With Mosh",
    year: "2024",
  },
];

// ── Skills ──────────────────────────────────────

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    icon: "languages",
    skills: ["JavaScript", "TypeScript", "C#", "Java", "HTML", "CSS", "SQL", "Python", "Dart"],
  },
  {
    category: "Mobile Development",
    icon: "mobile",
    skills: [
      "Flutter",
      "Cubit",
      "BLoC",
      "State Management",
      "Shared Preferences",
      "Dio (Networking)",
      "Firebase",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "frameworks",
    skills: [
      "ASP.NET Core",
      ".NET",
      "Blazor",
      "Entity Framework Core",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
  },
  {
    category: "APIs & Auth",
    icon: "auth",
    skills: [
      "REST APIs",
      "MVC Architecture",
      "Role-Based Access Control",
      "Supabase Auth",
      "ASP.NET Core Identity",
      "Authentication & Authorization",
    ],
  },
  {
    category: "Databases",
    icon: "databases",
    skills: ["PostgreSQL", "SQL Server", "MySQL", "Supabase", "MongoDB"],
  },
  {
    category: "Tools & Practices",
    icon: "tools",
    skills: [
      "Git & GitHub",
      "Docker",
      "ROS",
      "Gazebo",
      "RViz",
      "Repository Pattern",
      "Service Layer",
      "Postman",
      "Vercel",
      "OOP",
      "Data Structures & Algorithms",
      "Design Patterns",
      "Competitive Programming",
      "Linux / Unix CLI",
    ],
  },
];

// ── Social Links ────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
  download?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${PERSONAL.email}`,
    ariaLabel: "Send an email to Abdelrahman",
  },
  {
    label: "GitHub",
    href: PERSONAL.github,
    ariaLabel: "View Abdelrahman's GitHub profile",
  },
  {
    label: "LinkedIn",
    href: PERSONAL.linkedin,
    ariaLabel: "View Abdelrahman's LinkedIn profile",
  },
  {
    label: "Resume",
    href: PERSONAL.resumeUrl,
    ariaLabel: "Download Abdelrahman's CV PDF",
    download: "Abdelrahman-Elsheref-CV.pdf",
  },
];

export const RESUME_URL = PERSONAL.resumeUrl;
export const GITHUB_URL = PERSONAL.github;
export const LINKEDIN_URL = PERSONAL.linkedin;
