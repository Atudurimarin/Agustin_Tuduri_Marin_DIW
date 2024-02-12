'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
    },
    devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
    },
    plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', filename:'index.html' }),
    new HtmlWebpackPlugin({ template: './src/politica.html', filename: 'politica.html' }),
    new HtmlWebpackPlugin({ template: './src/sobre.html', filename: 'sobre.html' }),
    new HtmlWebpackPlugin({ template: './src/formacion.html', filename: 'formacion.html' }),
    new HtmlWebpackPlugin({ template: './src/proyectos.html', filename: 'proyectos.html' })
    ],
    module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  context: 'src', // A
                },
              },
            ],
          },
        {
        test: /\.(sass|css|scss)$/,
        use: [
            {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
            },
            {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
            },
            {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                plugins: [
                    autoprefixer
                ]
                }
            }
            },
            {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
            }
        ]
        }
    ]
    }
}