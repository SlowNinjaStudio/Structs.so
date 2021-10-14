const path = require('path');

module.exports = {
  entry: {
    structuresPage: './src/js/structuresPage.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'js'),
  },
};
