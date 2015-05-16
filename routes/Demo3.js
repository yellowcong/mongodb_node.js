/**
 *  删除一条数据
 */
//导入
var MongoClient = require('mongodb').MongoClient;

//通过MongoCient的connect方法来连接数据库
MongoClient.connect('mongodb://localhost:27017/nodejs',function(err,db){
	if(err){
		console.log(err);
	}
	
	//删除数据，也是先获取集合，然后删除
	//获取集合
	var roles = db.collection('roles');
	//删除数据
	roles.remove({name:'admin'},function(err, result){
		if(err){
			console.log(err);
		}
	});
	
});
