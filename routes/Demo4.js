/**
 * 获取所有数据
 */
//导入
var MongoClient = require('mongodb').MongoClient;

//通过MongoCient的connect方法来连接数据库
MongoClient.connect('mongodb://localhost:27017/nodejs',function(err,db){
	if(err){
		console.log(err);
	}
	
	//获取集合
	var roles = db.collection('roles');
	
	//不带条件查询
	roles.find({rolename:'admin'}).toArray(function(err,datas){
		if(err){
			console.log(err);
		}
		console.log(datas.length);
		console.log(datas);
	});
});