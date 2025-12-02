import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "metalabs.id",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
