/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
}

module.exports = nextConfig;
