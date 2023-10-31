const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3010'
          : process.env.URL_API_SERVER,
      changeOrigin: true,
    }),
  );
};
