var http = require("http");
var express = require("express");
var cons = require('consolidate');
var app = express()
var server = http.createServer(function (request, response){
  //response.writeHead(200, {"Content-Type:": "text/plain"});
  response.end("Hello, world");
});

server.listen(8000);

console.log("Server running at http://localhost:8000");
