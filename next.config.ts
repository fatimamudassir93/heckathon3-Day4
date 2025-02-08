import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Sanity ke images ke liye domain allow karna zaroori hai
  },
};

export default nextConfig;


