var http = require('http');
var fs = require('fs');
var str = "rien...";
const handler=(req,res)=>{
    fs.readFile('./public/index.html','utf-8',(err,data)=>{
        if(!err){
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);            
        }
        else{
            res.writeHead("Error 404 , file not found");
            res.write('<h1>404 Page not found</h1>');
        }
        res.end();

})
}


var server= http.createServer(handler);
server.listen(8122);

