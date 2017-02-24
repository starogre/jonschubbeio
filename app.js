
var express = require('express');
var app = express();
var serv = require('http').Server(app);


app.get('/', function(req, res) {
	res.sendFile(__dirname+'/client/index.html');
});

app.use('/client',express.static(__dirname+'/client'));

app.use('/client/scripts', express.static(__dirname + '/node_modules/vue/dist/'));

serv.listen(2000);
console.log("Server started.");
