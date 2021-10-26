const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require('path');

module.exports = {
  entry: {
    indexPage: './src/js/pages/indexPage.js',
    schematicsPage: './src/js/pages/schematicsPage.js',
    structureViewPage: './src/js/pages/structureViewPage.js',
    structuresPage: './src/js/pages/structuresPage.js',
    researchPage: './src/js/pages/researchPage.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'js'),
  },
  experiments: {
    topLevelAwait: true,
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};
