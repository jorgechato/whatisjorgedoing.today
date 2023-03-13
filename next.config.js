/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    ARTICLES_LOCATION: 'articles',
    TITLE: 'WHAT IS JORGE</br>DOING TODAY?',
    SITE_MAP: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Archive',
        url: '/archive',
      },
    ],

    SOCIALS: [
      {
        name: 'GitHub',
        url: '',
      },
      {
        name: 'Twitter',
        url: '',
      },
      {
        name: 'LinkedIn',
        url: '',
      },
    ],
  },
}

module.exports = nextConfig;
