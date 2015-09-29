var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var ratings=[
	{
		"name":"Rate1",
		"ratings":0,
		"score":0
	},
	{
		"name":"Rate2",
		"ratings":0,
		"score":0
	},
	{
		"name":"Rate3",
		"ratings":0,
		"score":0
	}
	
];
app.use(express.static(__dirname));

app.get('/ratings',function(req,res){
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(ratings));
})
app.post('/ratings/:name',function(req,res){
	var rating = req.body;
	if(rating.new){
		delete rating.new;
		ratings.push(rating);
	}else{
		for(var i in ratings){
			if(ratings[i].name === rating.name){
				ratings[i]=rating;
			}
		}
	}
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(rating));
});
app.delete('/ratings/:name',function(req,res){
	var r={};
	for(var i in ratings){
		if(ratings[i].name === req.params.name){
			r = ratings[i];
			ratings.splice(i,1);
		}
	}
	res.setHeader('Content-Type', 'application/json');
    res.send(r);
});
app.listen(process.env.PORT || 8081);