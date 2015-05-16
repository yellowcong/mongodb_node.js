/**
 * New node file
 */
//导入mongoose模块
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/nodejs');
//获取连接
var db = mongoose.connection;
//当有错误
db.on('error', console.error.bind(console, '连接失败'));
//当连接成功
db.once('open', function (callback) {
  // yay!
	console.log("连接成功");
});