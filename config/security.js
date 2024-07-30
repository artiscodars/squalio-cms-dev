module.exports = ({ env }) => ({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      'default-src': ["'self'"],
      'script-src': ["'self'", "'unsafe-inline'"],
      'style-src': ["'self'", "'unsafe-inline'"],
      'img-src': ["'self'", 'data:', '*.amazonaws.com'],
      'frame-src': ["'self'", 'www.youtube.com'],  // allow iframes from YouTube
      'connect-src': ["'self'"],
    },
  },
});
