/**
 * 使用Mongoos的ORM框架 
 */
//导入mongoose模块
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/nodejs');
//获取连接
//var db = mongoose.connection;

//定义一个Car模型
var Cat = mongoose.model('Cat', { name: String });

//创建一只猫
var kitty = new Cat({ name: 'helloKity' });

//包存这只猫
kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});