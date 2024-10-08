const apiMocker = require('connect-api-mocker');
// const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(apiMocker('/api', 'mocks/api'));
  } else {
    /**
     * For test with real server in local
     */
    // app.use(
    //     '/api',
    //     createProxyMiddleware({
    //       target: process.env.REACT_APP_URL_API_SERVER,
    //       changeOrigin: true,
    //     }),
    //   );
  }
};
