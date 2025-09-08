/** @type {import('next').NextConfig} */
// next.config.mjs

const isGhPages = process.env.GITHUB_PAGES === 'true';
const repo = 'portfolio'; // <-- change to your repo name if different

/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages only supports static sites → we must export
  output: 'export',

  // Prevents errors with next/image (GH Pages has no server optimizer)
  images: {
    unoptimized: true,
  },

  // Ensures routes like /about/ map to about/index.html in /out
  trailingSlash: true,

  // Use basePath + assetPrefix only when deploying under /<repo-name>
  ...(isGhPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;
