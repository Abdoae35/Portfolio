import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static HTML export for deployment on Vercel (or any static host).
   * This ensures the site runs with zero server-side infrastructure.
   */
  output: "export",
};

export default nextConfig;
