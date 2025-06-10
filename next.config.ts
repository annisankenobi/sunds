import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 This enables static export
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
