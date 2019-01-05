"use strict"
//console.log("hello world")；



var http = require('http');
var url = require('url');
var path = require('path');

//创建http server,并传入回调函数
var server = http.createServer(function(request,response){
	console.log(request.method + "\n" + request.url);
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<div>123<div>');
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');




















