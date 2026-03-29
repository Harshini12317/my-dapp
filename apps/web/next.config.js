/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Turbopack config (required for Next.js 16)
  turbopack: {
    root: __dirname, // fixes multiple lockfile warning
  },
};

module.exports = nextConfig;