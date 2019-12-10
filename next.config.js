const path = require('path');

const moduleNames = ['components', 'constants'];

module.exports = {
  webpack(config, options) {
    moduleNames.forEach(
      (moduleName) => (config.resolve.alias[moduleName] = path.join(__dirname, moduleName)),
    );
    return config;
  },
};
