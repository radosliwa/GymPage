var path = require('path');

module.exports = {
  entry: {
    main: './app/assets/scripts/main.js',
    vendor:'./app/assets/scripts/vendor.js'

  },
  output: {
    filename: '[name].js',
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
