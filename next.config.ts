import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/media/[...path]": ["./src/data/media-b64/**/*"],
  },
  // Local JPGs in /public stay on the default Image Optimization pipeline.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ensure MP4s under /public/media/videos are served with range support for scrubbing.
  async headers() {
    return [
      {
        source: "/media/videos/:path*",
        headers: [
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/media/stills/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
