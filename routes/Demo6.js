/**
 * New node file
 */
var MongoClient = require('mongodb').MongoClient;

//通过MongoCient的connect方法来连接数据库
MongoClient.connect('mongodb://localhost:27017/nodejs',function(err,db){
	if(err){
		console.log(err);
	}
	//获取集合
	var roles = db.collection("roles");
	
	//查询到表的第一条数据
	roles.findOne(function(err,result){
		console.log(result);
		db.close();
	});
});