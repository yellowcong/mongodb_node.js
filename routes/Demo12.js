/**
 *  关联关系
 *  一对一
 */
//导入mongoose模块
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/nodejs');
//导入Schema
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
	name:String
});

var IdCardSchema = new Schema({
	number:String,
	//外键 Person的id
	person_id:{type: Schema.Types.ObjectId},
});

//获取模型
var Person = mongoose.model("Person",PersonSchema);
var IdCard = mongoose.model("IdCard",IdCardSchema);

var p = new Person({name:"yellowcong"});
p.save();

var card = new IdCard({number:"422202199410106666",person_id:p._id});
card.save();





