/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    ARTICLES_LOCATION: 'articles',
  },
}

module.exports = nextConfig;
