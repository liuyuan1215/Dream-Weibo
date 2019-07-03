 var initiateRequest =function(callback){
     var xhr = new XMLHttpRequest()
     xhr.open('get','http://www.coupleworldlove.online:3001/music',true)
     xhr.send()
     xhr.onreadystatechange = function(){
         if(xhr.status==200&&xhr.readyState==4){
             callback(xhr.response)
         }
     }
    }