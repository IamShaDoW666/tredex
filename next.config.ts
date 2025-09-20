import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      bodySizeLimit: '30mb'
    }
  },
  images: {
    remotePatterns: [
      {
        hostname: "*"
      }
    ]
  }
};

export default nextConfig;
