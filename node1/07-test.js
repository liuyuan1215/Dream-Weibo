var fs=require('fs');

/*
var data=fs.readFileSync('./1.txt','utf-8');

console.log(data);*/

//触发条件（时间I/O 磁盘I/O 自定义事件emit addListener on）

fs.readFile("./1.txt","utf-8",function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data);
	}
})


//读1.txt 然后停2S再结束



