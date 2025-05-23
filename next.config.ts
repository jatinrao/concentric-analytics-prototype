import type { NextConfig } from "next";
// import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  // Add explicit runtime configuration
  experimental: {
    serverComponentsExternalPackages: ['intlayer', 'next-intlayer']
  }
};

// Temporarily disable Intlayer wrapper for debugging
export default nextConfig;
// export default withIntlayer(nextConfig);