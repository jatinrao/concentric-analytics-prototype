import { NextConfig } from "next";

const nextConfig:NextConfig = {
  serverExternalPackages: ['intlayer', 'next-intlayer', '@intlayer/config', 'esbuild'],
  
  webpack: (config) => {
    // Handle Node.js modules in browser
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
      child_process: false,
      esbuild: false,
    };
    
    // Prevent importing specific modules in client components
    config.module.rules.push({
      test: /node_modules\/(esbuild|@intlayer\/config)/,
      use: 'null-loader',
    });
    
    return config;
  },
};

export default nextConfig;