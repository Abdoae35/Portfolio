import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── SEO & Open Graph metadata ─────────────────

export const metadata: Metadata = {
  // TODO: Update the title and description with your full name
  title: "Abdelrahman — Software Developer",
  description:
    "Portfolio of Abdelrahman — final-year CS student and software developer specializing in .NET/Blazor and Flutter. View projects, skills, and experience.",
  keywords: [
    "Abdelrahman",
    "software developer",
    "portfolio",
    ".NET",
    "Blazor",
    "Flutter",
    "full-stack",
    "CS student",
  ],
  authors: [{ name: "Abdelrahman" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    // TODO: Replace with your deployed Vercel URL
    url: "https://your-portfolio.vercel.app",
    title: "Abdelrahman — Software Developer",
    description:
      "Final-year CS student & software developer specializing in .NET/Blazor and Flutter.",
    siteName: "Abdelrahman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman — Software Developer",
    description:
      "Final-year CS student & software developer specializing in .NET/Blazor and Flutter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
