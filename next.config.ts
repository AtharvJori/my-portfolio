import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'www.vectorlogo.zone',
      'raw.githubusercontent.com',
      'huggingface.co'
    ],
  },
};

export default nextConfig;
