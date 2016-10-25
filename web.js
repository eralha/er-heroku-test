var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/www/index.html');
}).listen(port, function () {
  console.log('Example app listening on port '+port);
});

app.use('/js', express.static(__dirname + '/www/js'));
app.use('/images', express.static(__dirname + '/www/images'));