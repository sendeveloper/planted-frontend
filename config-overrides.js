const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    components: path.resolve(__dirname, "src/components"),
    utils: path.resolve(__dirname, "src/utils"),
    types: path.resolve(__dirname, "src/types"),
  };

  return config;
};