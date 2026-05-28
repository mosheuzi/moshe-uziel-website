import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Turbopack configuration for cleaner warnings
  turbo: {
    root: __dirname,
  },
};

export default nextConfig;
