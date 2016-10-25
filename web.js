var express = require('express');
var port = process.env.PORT || 3000;
var app = express.createServer();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/www/index.html');
}).configure(function() {
    app.use('/images', express.static(__dirname + '/www/images'));
    app.use('/js', express.static(__dirname + '/www/js'));
}).listen(port);