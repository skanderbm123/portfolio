// Prefix files served from /public so they resolve under the GitHub Pages basePath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (path) => `${basePath}/${path.replace(/^\//, "")}`;
