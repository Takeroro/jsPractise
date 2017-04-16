var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');

var root = path.resolve('.');
// var filePath = path.join(root, 'pub', 'index.html');

var server = http.createServer(function(req,res){

    var date = new Date().toString();
    console.log(date+" : "+req.headers['user-agent']+" "+req.method+req.url);

    var pathName = url.parse(req.url).pathname;
    var filePath = path.join(root,pathName);
    console.log(filePath);

    fs.stat(filePath,function(error,stat){
        if (!error && stat.isFile()){
            console.log('200');
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.createReadStream(filePath).pipe(res);
        } else {
            console.log('404');
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>file not found</h1>');
        }
    });
});

server.listen(10086);

console.log('Server is running at http://127.0.0.1:10086/');
