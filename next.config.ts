import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
output: 'standalone',
};

export default withIntlayer(nextConfig);
