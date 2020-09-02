const path = require ('path');
const DotEnv = require('dotenv-webpack');

module.exports = {
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.plugins.push(new DotEnv({silent: true}))
    return config;
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  }
}
