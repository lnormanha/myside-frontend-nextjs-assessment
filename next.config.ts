import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
