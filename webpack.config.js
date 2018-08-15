var path = require('path');

module.exports = {
  entry: './app/assets/scripts/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './app/temp/scripts')
  },
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        query: {
          presets:['env']
        },
        test:/\.js$/,
        exclude:/node_modules/
      }
    ]
  }
};
