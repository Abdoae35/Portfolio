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
    tagline: "Multi-branch gym management platform",
    description: "A platform in development for managing memberships, attendance, sales, financial operations, and employees across gym branches.",
    techStack: ["ASP.NET Core", "PostgreSQL", "React"],
    highlights: [
      "Designed a layered backend architecture with role-based access control, business workflows, and audit logging.",
    ],
    liveUrl: "",
    sourceUrl: "",
  },
  {
    title: "FitPanel",
    tagline: "SaaS platform for online fitness coaches",
    description:
      "A comprehensive Blazor Server SaaS application built on .NET 9 that gives fitness coaches a centralized dashboard to manage clients, track subscriptions, and deliver personalized workout and diet plans — complete with professional PDF exports.",
    techStack: [
      "Blazor Server",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "PDFShift API",
    ],
    highlights: [
      "Engineered full English/Arabic localization using .resx resource files, enabling seamless RTL layout switching at runtime.",
      "Implemented role-based access control (Admin & Coach) and designed a scalable relational database schema.",
      "Redesigned PDF exports by replacing emoji icons with inline SVGs, producing a polished athletic look.",
      "Applied OWASP security best practices across input validation, anti-CSRF, and secure authentication flows.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/FitPanel",
  },
  {
    title: "JobBoard",
    tagline: "Full-stack job platform connecting recruiters & job seekers",
    description:
      "A modern job board web application featuring secure role-based authentication, interactive recruiter dashboards, and job application tracking built with Next.js App Router and Supabase.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase Auth",
    ],
    highlights: [
      "Implemented job posting, application tracking, and recruiter management via REST APIs on Supabase/PostgreSQL.",
      "Built a responsive UI with React and Next.js App Router using reusable components and protected routes.",
      "Architected secure role-based access for job seekers and recruiters with seamless session handling.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/job_board",
  },
  {
    title: "Food Trucks Platform",
    tagline: "End-to-end ordering platform for customers & food truck owners",
    description:
      "A full-stack web application designed to connect users with local food trucks, offering streamlined menu browsing, shopping carts, and real-time order status tracking.",
    techStack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Knex.js",
      "jQuery",
      "RESTful API",
    ],
    highlights: [
      "Designed and built 22 RESTful API endpoints for orders, carts, menus, and user management.",
      "Implemented shopping cart management, order placement, and order status tracking end-to-end.",
      "Optimized query performance and schema structure with Knex.js migrations and PostgreSQL.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/FoodTruckGIU",
  },
  {
    title: "Afforestation Achievement System",
    tagline: "Plantation progress & environmental management platform",
    description:
      "A role-based management system for recording planting activities, managing data, and generating reports across multiple locations.",
    techStack: [
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "C#",
    ],
    highlights: [
      "Implemented role-based access and data management for planting activities.",
      "Generated reports across multiple locations.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/AffrostationPanel",
  },
  {
    title: "Hospital Clinic Management System",
    tagline: "Comprehensive ASP.NET Core MVC (.NET 9) medical facility management platform",
    description:
      "A production-ready web application built with ASP.NET Core MVC (.NET 9) and EF Core 9 that centralizes patient records, doctor schedules, EMR, automated billing, and appointment lifecycle management into a unified digital platform.",
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
      "Designed a 12-entity relational database and role-based access control with ASP.NET Core Identity.",
      "Implemented end-to-end appointment lifecycle management with double-booking prevention, doctor availability rules, and FullCalendar.js integration.",
      "Built Electronic Medical Records (EMR) with dynamic prescription items and automated invoice generation upon appointment completion.",
      "Designed interactive analytics dashboards featuring Chart.js metrics, DataTables filtering, and Excel report exports via EPPlus.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35/ClinicManagment",
  },
  {
    title: "se7aty",
    tagline: "Mobile health companion application",
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
      "Generated polished adaptive app icons across all densities using flutter_launcher_icons.",
    ],
    liveUrl: "",
    sourceUrl: "https://github.com/Abdoae35",
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
