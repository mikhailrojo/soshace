var express = require('express'),
path = require('path'),
app = express(),
Candidates = require('./model/candidates.model.js'),
port = (process.env.PORT || 8080),
mongoose = require('mongoose'),

mongoURI = 'mongodb://soshace:soshace@ds017070.mlab.com:17070/soshace';

mongoose.connect(mongoURI, function(err, data){
	if(err)console.log(err);
	else console.log('К базе подключились!!');
	console.log(data);
})

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, function(){
	console.log("Слушаем порт");
});

app.get('/login/:id', function(req, res){
	console.log(req.params.id);
	res.send('ok');
});

app.get('/getData', function(req, res){
	Candidates.find(function(err, data){
		res.json(200, data);
		console.log(data);
	});
});