//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
// 配置babel的解析器  其中 resolve是解析路径的
const path=require("path");
function resolve (dir) {
  return path.join(__dirname, '..', dir)
  }
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});
module.exports = {
    entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/public",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
      contentBase: "./public",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true,//实时刷新
      open:false

      // disableHostCheck: true,
      // or
      // public: '172.16.71.56:8082'
    } ,
    module:{
      loaders:[

      {
        test: /\.scss$/,
        loader:ExtractTextPlugin.extract("css-loader!sass-loader")
       
    },
    {
      test: /(\.jsx|\.js)$/,
      use: {
          loader: "babel-loader",
      },
       include:[resolve('src'), resolve('test')],
       exclude: /node_modules/
  }

      ]
    },
    plugins: [
      new ExtractTextPlugin("style.css"), //提取出来的样式放在style.css文件中
      new webpack.BannerPlugin("版权所有，翻版必究（开课啦新航新技术部）")
  ]
  }