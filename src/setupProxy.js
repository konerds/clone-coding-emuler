const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:3010',
        changeOrigin: true,
      }),
    );
  } else {
    if (process.env.REACT_APP_IS_USE_PROXY === 'true') {
      app.use(
        '/api',
        createProxyMiddleware({
          target: process.env.REACT_APP_URL_API_SERVER,
          changeOrigin: true,
        }),
      );
    }
  }
};
