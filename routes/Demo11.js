/**
 * 删除数据
 */
//导入mongoose模块
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/nodejs');
//导入Schema
var Schema = mongoose.Schema;

var TeacherSchema = new Schema({
	username:String,
	//去掉它的version
},{versionKey:false});
//获取模型
var Teacher = mongoose.model("Teacher",TeacherSchema);

Teacher.find({_id:"5556d36ab6a667f0447d4ab2"},function(err,th){
	console.log(th);
})
//没有返回值的数据
/*var query = Teacher.findOne({username:"zhang3feng"});
query.select("username ");
//执行查询
query.exec(function(err,result){
	console.log(result);
});*/

//获取一条数据
/*Teacher.findOne({username:"zhang3feng"},function(err,th){
	console.log(th);
});
*/
//把这个号的同学换成张同学
/*Teacher.findByIdAndUpdate("5556d38e67dbd868341a3a82",{$set:{username:"zhang3feng"}},function(err,result){
	console.log(result);
});
*///数据更新
/*Teacher.update({_id:"5556d36ab6a667f0447d4ab2"},{$set:{username:"yellowcong"}},function(err,result){
	console.log(result);
});
*/
//查询所有
/*Teacher.find({},function(err,teacher){
	console.log(teacher);
});*/
//删除小张老师
/*Teacher.remove({username:"zhang3feng"},function(err){
	if(err){
		console.error("删除失败");
		console.log(err);
	}
});*/

