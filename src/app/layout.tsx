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

export const metadata: Metadata = {
  title: "Abdelrahman A. Elsheref — Software Engineer",
  description:
    "Portfolio of Abdelrahman A. Elsheref — final-year CS student and software engineer specializing in .NET/Blazor, React/Next.js, Node.js, and Flutter. View projects, experience, skills, and certifications.",
  keywords: [
    "Abdelrahman A. Elsheref",
    "Abdelrahman Elsheref",
    "software engineer",
    "portfolio",
    ".NET",
    "Blazor",
    "ASP.NET Core",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "6th of October",
    "Egypt",
    "CS student",
  ],
  authors: [{ name: "Abdelrahman A. Elsheref" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Abdoae35",
    title: "Abdelrahman A. Elsheref — Software Engineer",
    description:
      "Final-year CS student & software engineer specializing in .NET, Next.js, Node.js, and Flutter.",
    siteName: "Abdelrahman A. Elsheref Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman A. Elsheref — Software Engineer",
    description:
      "Final-year CS student & software engineer specializing in .NET, Next.js, Node.js, and Flutter.",
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
