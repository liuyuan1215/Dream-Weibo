
//module.exports 可以把类、方法、数组、对象公布给外部

/*
function AA(){
	this.bb=function(){
		console.log('aa');
	}
}

AA.prototype.call=function(){
	console.log("calling");
}

var aa=new AA();
module.exports=aa;*/

//module.exports=['laoxie','xiaowu','xiaodong'];

/*
module.exports={
	'cc':function(){
		console.log("lll");
	}
}*/

exports.login=function(){
	console.log(123);
}

