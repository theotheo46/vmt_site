import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vmt_site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
