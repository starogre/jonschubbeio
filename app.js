
var express = require('express');
var app = express();
var serv = require('http').Server(app);

//app.set('port', (process.env.PORT || 2000));

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/client/index.html');
});

app.use('/client',express.static(__dirname+'/client'));

app.use('/client/scripts', express.static(__dirname + '/node_modules/vue/dist/'));

//heroku deploy
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

serv.listen(process.env.PORT || 2000);

//local testing
//serv.listen(2000);

console.log("Server started.");
