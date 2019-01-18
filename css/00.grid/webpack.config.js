const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // Input/Outpus management
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    modules: [path.resolve('./node_modules')]
  },
  // Building mode
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    publicPath: '/'
  },
  // Plugins
  plugins: [
    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'CSS Grid',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      // https://github.com/joshbuchea/HEAD#meta
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        'theme-color': '#1fa3c4',
        description: 'Testing CSS Grid'
      },
      // for reading/debugging
      minify: false
    }),
    new CleanWebpackPlugin(['dist/']),
    new webpack.HotModuleReplacementPlugin()
  ],
  // Module
  module: {
    rules: [
      // Styles. Taken from Bootstrap:
      // https://getbootstrap.com/docs/4.0/getting-started/webpack/
      {
        test: /\.(scss)$/,
        use: [
          { loader: 'style-loader' }, // inject CSS to page
          { loader: 'css-loader' }, // translates CSS into CommonJS modules
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require('precss'), require('autoprefixer')];
              }
            }
          },
          { loader: 'sass-loader' } // compiles Sass to CSS
        ]
      }
    ]
  }
};
