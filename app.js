var express = require('express'),
path = require('path'),
app = express(),
port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, function(){
	console.log("Слушаем порт");
});

app.get('/', function(req, res){
	res.send('Запустились');
});
