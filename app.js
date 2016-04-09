var express = require('express'),
path = require('path'),
app = express(),
Candidates = require('./model/candidates.model.js'),
port = (process.env.PORT || 8080),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
mongoURI = 'mongodb://soshace:soshace@ds017070.mlab.com:17070/soshace';

mongoose.connect(mongoURI, function(err, data){
	if(err)console.log(err);
	else console.log('К базе подключились!!');
})
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, function(){
	console.log("Слушаем порт");
});

app.post('/login', function(req, res){
	console.log(req.body);
	if(req.body.login == 'admin' && req.body.password == 'admin'){
		res.send('ok');
	} else {
		res.send('bad');
	}

});

app.get('/getData', function(req, res){
	Candidates.find(function(err, data){
		res.status(200).json(data);
	});
});

app.post('/newCandidate', function(req, res){
	console.log(req.body);
	var newCandidate = new Candidates(req.body);
	newCandidate.save(function(err){
		if(err)console.log(err);
	})
	Candidates.find(function(err, data){
		res.status(200).json(data);
	});
	
});

app.put('/editCandidate', function(req, res){
	var requestId = req.body._id;
	Candidates.findOneAndUpdate({_id: requestId}, {name: req.body.name, place: req.body.place, time:req.body.time}, function(err, data){
		Candidates.find(function(err, data){
			res.status(200).json(data);
		});
	});

});


app.delete('/deleteCandidate/:id', function(req, res){
	console.log(req.params.id);
	Candidates.remove({_id : req.params.id}, function(err){
		if (err) console.log(err);
	});
	Candidates.find(function(err, data){
		res.status(200).json(data);
	});
});