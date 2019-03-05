module.exports = {
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    library: 'ui-workbench',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpeg|png)$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    modules: [`${__dirname}/src`, 'node_modules']
  }
}
