var express = require('express')
var fs = require('fs')
var app = express()
var path = require('path')
// 必须写 这个use 静态文件夹 因为不写的话 下面请求的静态文件 写在外面的js css 请求不到
 app.use(express.static('./static',{index:false}))
app.get('/musicHall',(req,res)=>{
   fs.readFile('./static/假的音乐纯js完成.html',{encoding:'utf-8'},(err,data)=>{
      if(err){
         console.log(err)
         return
      }
        res.send(data)
   })
})
app.get('/music',(req,res)=>{
   res.sendFile(path.resolve('./static/假的音乐搜索界面.html'))
})
app.get('/musicPlay',(req,res)=>{
   res.sendFile(path.resolve('./static/音乐播放界面.html'))
})
app.get('/getMyMusic',(req,res)=>{
   res.sendFile(path.resolve('./static/index.html'))
})
app.get('/',(req,res)=>{
   res.sendFile(path.resolve('./static/main.html'))
})
app.listen(3000)