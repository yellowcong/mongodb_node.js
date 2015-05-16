/**
 * 通过DB 来连接数据库
 */
//导入db模块
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

//实例化DB 对象
var db = new Db('nodejs', new Server('localhost', 27017));


db.open(function(err,db){
	if(err){
		conosle.error("数据库连接失败");
		console.log(err);
	}
	
	console.log("连接成功");
	//删除数据库
	
	var db2 = db.db("cms");
	db2.dropDatabase(function(err,reuslt){
		db.admin().listDatabases(function(err, dbs) {
			 console.log(dbs);
		 });
	});
	
	//获取所有的数据库
	/* 
	 * db.admin().listDatabases(function(err, dbs) {
		 console.log(dbs);
	 });*/
	
	//将users表 重命名为persons表
	/*db.renameCollection("users","persons",function(err,result){
		db.listCollections().toArray(function(err,items){
			if(err){
				console.log(err);
			}
			console.log(items);
			//关闭数据库
			db.close();
		});
	});*/
	
	//删除集合
	/*
	db.dropCollection("channels",function(err,result){
		db.listCollections().toArray(function(err,items){
			if(err){
				console.log(err);
			}
			console.log(items);
			//关闭数据库
			db.close();
		});
	});*/
	//创建集合
	/*db.createCollection("channels",function(err,result){
		db.listCollections().toArray(function(err,items){
			if(err){
				console.log(err);
			}
			console.log(items);
			//关闭数据库
			db.close();
		});
	})*/
	
	//列出所有的集合
	/*
	db.listCollections().toArray(function(err,items){
		if(err){
			console.log(err);
		}
		console.log(items);
		//关闭数据库
		db.close();
	});
	*/
});