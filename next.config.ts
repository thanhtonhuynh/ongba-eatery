import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "10.0.0.189"],
  experimental: {
    // The careers form sends resume/cover-letter attachments (base64) through a
    // server action; the default 1 MB body limit is too small.
    serverActions: { bodySizeLimit: "20mb" },
  },
};

export default nextConfig;
