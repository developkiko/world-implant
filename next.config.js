/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  appDir: true,
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    appDir: true
  },
  env: {
    JWT_SECRET: process.env.JWT_SECRET
  }
};

module.exports = nextConfig;
