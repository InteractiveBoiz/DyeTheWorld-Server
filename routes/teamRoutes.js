const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Team = require('../models/team');

const MongoClient = require('mongodb').MongoClient;
var mongoURL = "mongodb://MongoDB-Dev1:1234@dyetheworld-dev-shard-00-00-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-01-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-02-si1d6.mongodb.net:27017/DyeTheWorldDB?ssl=true&replicaSet=DyeTheWorld-Dev-shard-0&authSource=admin";

mongoose.connect(mongoURL, {
	useMongoClient: true	
});

app.use(bodyParser.json());

app.get('/teams', function(req, res){
	MongoClient.connect(mongoURL, function(err, db){
	  var col = db.collection('Team');

		col.find().toArray(function (err, result){
			console.log(result);
			res.json(result);
		});
		db.close();
	});
});

// Select one team
app.get('/teams/:id', (req, res, next) => {  
	Team.findById(req.params.id)
	.then(teamFound => {
		if (!teamFound) { 
			return res.status(404).end(); 
		}
		return res.status(200).json(teamFound);
	})
	.catch(err => next(err));
});

module.exports = app;