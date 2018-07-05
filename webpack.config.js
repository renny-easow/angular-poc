var webpack = require('webpack');
var path = require('path');
module.exports = function () {
  return {
    entry: {
      main: "./app/main",
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist',
      sourceMapFilename: "[name].bundle.js.map",
    },
    devtool:'cheap-module-source-map', //should be commented out while generating production build
    resolve: {
      extensions: ['.js', '.ts']
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
      })

    ],
    module: {
      exprContextCritical: false,
      rules: [{
        test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
      }]
    }
  };
}
