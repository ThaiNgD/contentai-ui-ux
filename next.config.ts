import type { NextConfig } from "next";
import nextTranslate from "next-translate-plugin";
const nextConfig: NextConfig = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});

export default nextConfig;
