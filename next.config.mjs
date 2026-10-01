// next.config.mjs
const isGhPages = process.env.GITHUB_PAGES === "true";
const repo = "portfolio";
const basePath = isGhPages ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages only supports static sites, so we export.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isGhPages ? { basePath, assetPrefix: `${basePath}/` } : {}),
};

export default nextConfig;
