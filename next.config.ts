import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
diskDir:'.next',
};

export default withIntlayer(nextConfig);
