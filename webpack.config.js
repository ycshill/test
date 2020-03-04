// webpack 是node 写出来的

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');  // html 的插件
module.exports = {
  devServer: {  // 开发服务器的配置
    port: 3000,
    progress: true, // 进度条
    contentBase: './dist', // 以哪个目录作为静态服务
    open: true, // 自动打开浏览器
    compress: true, // 压缩
  },
  mode:'production', //模式，默认两种，一种是 production development
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名, f每次都产生新的文件, 防止覆盖
    path: path.resolve(__dirname, 'dist'),  // 路径必须是一个绝对路径,这句话是以当前目录下产生一个dist目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',  // 打包的文件的名字
      minify: {
        removeAttributeQuotes: true,  // 删除双引号
        collapseWhitespace: true, // 折叠空行
      }, //压缩
      hash: true, // 添加 hash戳，解决缓存的问题
    })
  ],  // 数组，放所有 webpack的插件
};