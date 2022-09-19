const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  // resolve：设置模块如何被解析
  resolve: {
    // extensions：引入模块时不带扩展
    // 原来：import File from '../path/to/file.js'
    // 现在：import File from '../path/to/file'
    extensions: ['.js', '.ts', '.tsx'],
  },
  // module：决定了如何处理不同类型的模块
  module: {
    // rules：创建模块时，匹配请求的规则数组
    rules: [
      {
        // 匹配所有 ts 文件
        test: /\.tsx?$/i,
        // 使用 ts-loader 来处理
        use: 'ts-loader',
        // 排除这个目录下的
        exclude: /node_modules/,
      },
    ],
  },
  // plugins：用于以各种方式自定义构建过程
  plugins: [
    // 使用目标模板来生成最终 html
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}