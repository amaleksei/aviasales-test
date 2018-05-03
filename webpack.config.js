const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src/javascripts/index.jsx',
    './src/scss/main.scss',
  ],
  output: {
    filename: './javascripts/bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true,
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          ],
        }),
      },
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   use: [{
      //     /* inline if smaller than 10 KB, otherwise load as a file */
      //     loader: 'url-loader',
      //     options: {
      //       // outputPath: './assets/images',
      //       limit: 8000,
      //       // name: path.join(__dirname, 'assets/images/[name].[hash:7].[ext]'),
      //       // name: 'images/[hash]-[name].[ext]',
      //     },
      //   }],
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   loader: 'file-loader',
      //   options: {
      //     // name: path.resolve(__dirname, 'assets/images/[name].[hash:7].[ext]'),
      //     name: '[name].[ext]',
      //     outputPath: './assets/images',
      //   },
      // },
      {
        test: /\.(eot|ttf|woff2?|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './fonts',
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './assets/css/style.bundle.css',
      allChunks: true,
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'html', 'views', 'index.html'),
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets/favicon',
        to: './assets/favicon',
      },
      {
        from: './src/assets/favicon',
        to: './assets/favicon',
      },
      {
        from: './src/assets/images',
        to: './assets/images',
      },
    ]),
  ],
};
