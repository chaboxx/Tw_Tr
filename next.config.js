/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["pbs.twimg.com", "rickandmortyapi.com"],
  },
};

module.exports = nextConfig;
