/**
 * 模型的创建
 */
//导入mongoose模块
var mongoose = require('mongoose');
//导入Schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username :String,
	password:String,
	age:Number,
	//设定默认的日期为当前日期
	cratedate:{type: Date,default:Date.now }
});

//连接数据库
mongoose.connect('mongodb://localhost/nodejs');

//获取模型
var User =  mongoose.model('User', UserSchema);
//实例化数据
var user = new User({username:'yellowcong',password:'xx',age:20});
//保存对象
user.save();