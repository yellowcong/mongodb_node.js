/**
 * 通过create方法来创建模型
 */
//导入mongoose模块
var mongoose = require('mongoose');
//导入Schema
var Schema = mongoose.Schema; 
//连接数据库
mongoose.connect('mongodb://localhost/nodejs');

var TeacherSchema = new Schema({
	username:String,
	//去掉它的version
},{versionKey:false});
//获取模型
var Teacher = mongoose.model("Teacher",TeacherSchema);

//添加Teacher数据
Teacher.create({username:"zhang3feng"},function(err,th){
	console.log(th);
});