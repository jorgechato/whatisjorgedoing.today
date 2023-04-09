const title = 'WHAT IS JORGE</br>DOING TODAY?';

module.exports = {
  ARTICLES_LOCATION: 'content/articles',
  TITLE: title,
  SITE_MAP: [
    {
      name: 'Home',
      url: '/',
      location: 'content/home.md',
    },
    {
      name: 'Status',
      url: '/status',
    },
    {
      name: 'About',
      url: '/about',
      location: 'content/about.md',
    },
    {
      name: 'Archive',
      url: '/archive',
    },
  ],

  STATUS: [
    {
      name: 'JORGE</br>CHATO',
      url: 'https://jorgechato.com/api/health-check',
    },
    {
      name: 'WHERE IS</br>JORGE TODAY?',
      url: 'https://whereisjorge.today/api/health-check',
    },
    {
      name: 'NO APTO</br>EN ASIA',
      url: 'https://noaptoen.asia/health-check.json',
    },
    {
      name: title,
      url: '/api/health-check',
    },
  ],

  SOCIALS: [
    {
      name: 'GitHub',
      url: 'https://github.com/jorgechato',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jorgechato',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jorgechato/',
    },
  ],
};
