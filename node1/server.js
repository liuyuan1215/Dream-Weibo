var http=require('http');
var fs=require('fs');
var url=require("url");

http.createServer(function(req,res){
	//var readPath=__dirname+"/"+"2.html";
	//console.log(readPath);
	//console.log(req.url);
	//console.log(url.parse(req.url));
	//var data=url.parse(req.url).query;
	//var arr=data.split("=");
	//console.log(arr);
	var readPath=__dirname+'/'+url.parse("2.html").pathname;
	var indePage=fs.readFileSync(readPath,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indePage);
	//console.log(readPath);
	/*
	res.writeHead(200,{"Content-type":"text/html"});
	res.end("<form action='/add' method='post'> ");*/
}).listen(3000);


console.log("server start port 3000");