// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

const path = require('path')

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: [/node_modules/]
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre'
      },
      { test: /\.(svg|jpg|jpeg|png)$/, loader: 'file-loader' },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.join(__dirname, '..', 'src'), 'node_modules']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
