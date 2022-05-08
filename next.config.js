/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'api.ts',
    'api.js',
  ],
  images: {
    domains: ['images.ctfassets.net'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig;
