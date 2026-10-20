import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes HTML/CSS/JS to `out/`.
  output: "export",
  // Every page is generated from local files at build time, so runtime caching
  // (Cache Components / partial prefetching) has nothing to do here.
  images: {
    // Static export has no image optimiser: each photo is one WebP file in
    // public/images, served as it is.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
