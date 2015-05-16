/**
 * 连接mongodb数据库
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
	//就这么简单的成功了
	console.log("连接成功");
	
	//获取集合
	//获取角色这个集合
	var roles = db.collection('roles');
	//插入数据
	roles.insert({rolename:'admin'},function(err,result){
		if(err){
			console.error("数据插入失败");
			console.log(err);
		}
		console.log(result);
		//关闭数据库
		db.close();
	});
})
