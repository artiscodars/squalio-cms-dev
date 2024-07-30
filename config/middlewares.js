module.exports = [
  {
    name: "strapi::errors",
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", process.env.BUNNY_PULL_ZONE, '*.strapi.io'],
          "media-src": ["'self'", "data:", "blob:", process.env.BUNNY_PULL_ZONE],
          'frame-src': ["'self'", 'www.youtube.com'],  // allow iframes from YouTube
          'script-src': ["'self'", "'unsafe-inline'"],
          'style-src': ["'self'", "'unsafe-inline'"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  'strapi::session',
  "strapi::favicon",
  "strapi::public",
];
