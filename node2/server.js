var http=require('http');
var url=require('url');
var fs=require('fs');
var formidable=require('formidable');

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            goIndex(res);
            break;
        case '/parse':
            goUpload(req,res);
            break;
        default:
            res.writeHead(404,{'Content-type':'text/plain'});
            res.end('the page is gone');
    }
}).listen(3000);

console.log('sever start port 3000');

function goIndex(res){
    //1、读取路径
    var pathname=__dirname+'/static/'+url.parse('index.html').pathname;
    //2、把文件加载到内存
    var realFile=fs.readFileSync(pathname,'utf-8');
    //3、把内存数据打成数据包回传
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(realFile);
}

function goUpload(req,res){
    //处理上传文件功能
    var form=new formidable.IncomingForm();
    form.uploadDir=__dirname+'/upload/';
    form.parse(req,function(err,fields,files,res){
        var oldurl=files.sfile.path;
        var newurl=__dirname+'/upload/'+files.sfile.name;
        fs.rename(oldurl,newurl,function(err){
            if(err) throw err;
            res.writeHead(200,{'Content-type':'text/plain'});
            res.end('上传成功');
        })
        // res.writeHead(200,{'content-type':'text/plain'});
        // res.write('received upload:\n\n');
        // res.end(util.inspect({fields:fields,files:fiels}));
    });
    return ;
}