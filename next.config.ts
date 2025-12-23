import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Désactiver ESLint lors du build (optionnel)
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
