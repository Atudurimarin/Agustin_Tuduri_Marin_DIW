const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: './src/js/application.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
        
        template: './src/index.html'
  })

],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }
    ],
  },
};