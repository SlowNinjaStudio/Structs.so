const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require('path');

module.exports = {
  entry: {
    animationPage: './src/js/pages/animationPage.js',
    dragAndDropPage: './drag-and-drop/js/dragAndDropPage.js',
    indexPage: './src/js/pages/indexPage.js',
    schematicsPage: './src/js/pages/schematicsPage.js',
    structureViewPage: './src/js/pages/structureViewPage.js',
    structuresPage: './src/js/pages/structuresPage.js',
    researchPage: './src/js/pages/researchPage.js',
    wattPage: './src/js/pages/wattPage.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'js'),
    sourceMapFilename: "[name].js.map",
  },
  devtool: "source-map",
  experiments: {
    topLevelAwait: true,
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};
