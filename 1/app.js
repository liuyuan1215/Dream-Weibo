var falseApi = {
    list : [
        {
            id : 1,
            name : 'xiao',
            age : 20,
            phone : 17545123671
        },
        {
            id : 2,
            name : 'xiaobo',
            age : 20,
            phone : 18845792375
        }
    ],

    message : [],
    //得到全部商品
   getList : function(calllback){
         calllback(this.list)
    },
    // 获取 某个商品 
    getDetail : function(id,calllback) {
        this.list.filter((e)=>{
            if(e.id==id){
                console.log(e)
                 calllback(e)
            }
        })
      
    },
    // 添加人的信息 到手机
    addMessage : function(id,callback){
        var a = this.list.filter((e)=>e.id==id)[0]
        console.log(a)
        this.message.push(a)
       console.log(this.message)
       callback({code : 200,success : '成功'})
    },
    getMessage : function(callback) {
        callback(this.message)
    }
    

}