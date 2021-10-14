const path = require('path');

module.exports = {
  entry: {
    schematicsPage: './src/js/pages/schematicsPage.js',
    structuresPage: './src/js/pages/structuresPage.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'js'),
  },
};
