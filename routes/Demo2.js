/**
 * MongoDb数据更新
 */
//导入
var MongoClient = require('mongodb').MongoClient;

//连接地址
//后面的nodejs可以随便写， 居然没事， fuck
var url = 'mongodb://localhost:27017/nodejs';

//通过MongoCient的connect方法来连接数据库
MongoClient.connect(url,function(err,db){
	if(err){
		console.log(err);
	}
	
	//获取集合
	var roles = db.collection('roles');
	
	//更新数据
	roles.update({rolename:"admin"},{"$set":{rolename:"打酱油"}},function(err,result){
		if(err){
			console.error("更新失败");
			console.log(err);
		}
		console.log("更新条数\t"+result.result.n);
	});
	
});
