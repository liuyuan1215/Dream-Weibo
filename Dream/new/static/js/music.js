var searchAjaxData = function (method, url, data, callback) {
    var xhr = new XMLHttpRequest()
    method = method.toLowerCase()
    var param = '?';
    for (var key in data) {
        param += key + '=' + data[key] + '&'
    }
    param = param.slice(0, param.length - 1)
    if (method == 'get') {
        xhr.open(method, url + param, true)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                if(callback){
                   callback(xhr.response) 
                }
                
            }
        }
    }

}

var getAjax = function (data,callback) {
    searchAjaxData('get', 'http://www.coupleworldlove.online:3000/search', { keywords: data }, function (e) {
        var result = JSON.parse(e)
        callback(e)

    })
}
var songUrl = function(id,callback){
    searchAjaxData('get','http://www.coupleworldlove.online:3000/music/url',{id:id},function(e){
         callback(e)
    })
 }
 var getLyric = function(id,callback){
     searchAjaxData('get','http://www.coupleworldlove.online:3000/lyric',{id:id},function(e){
         callback(e)
     })

 }
 var getPlayList = function(a,b,callback){
    searchAjaxData('get','http://www.coupleworldlove.online:3000/top/playlist',{limit:a,order:b},function(e){
        callback(e)
    })
 }
 
 var getBackGroundImg = function(id,callback){
     searchAjaxData('get','http://www.coupleworldlove.online:3000/playlist/detail',{id:id},function(e){
                callback(e)
     })
 }