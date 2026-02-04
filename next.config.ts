import type { NextConfig } from "next";

const isExport = process.env.IS_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  images: {
    unoptimized: isExport,
  },
  /* config options here */
};

export default nextConfig;
