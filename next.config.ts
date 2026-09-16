import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    serverActions: {
      // The application form uploads a medical report + a passport photo.
      bodySizeLimit: "8mb",
    },
  },
};

export default nextConfig;
