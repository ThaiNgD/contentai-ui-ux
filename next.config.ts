import type { NextConfig } from "next";
import nextTranslate from "next-translate-plugin";
const nextConfig: NextConfig = nextTranslate({
  webpack: (config) => {
    return config;
  },
});

export default nextConfig;
