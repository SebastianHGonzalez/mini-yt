require('dotenv').config();
const path = require('path');

const moduleNames = ['components', 'constants', 'hooks', 'actions', 'reducer', 'saga', 'store', 'services'];

module.exports = {
  webpack(config, options) {
    moduleNames.forEach(
      (moduleName) => (config.resolve.alias[moduleName] = path.join(__dirname, moduleName)),
    );
    return config;
  },

  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    services: {
      channels: {
        baseURL: process.env.PUBLIC_CHANNELS_SERVICE_BASE_URL,
      },
      posts: {
        baseURL: process.env.PUBLIC_POSTS_SERVICE_BASE_URL,
      },
    },
  },
};
