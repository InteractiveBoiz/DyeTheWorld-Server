const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const Player = require('../models/player');

const MongoClient = require('mongodb').MongoClient;
var mongoURL = "mongodb://MongoDB-Dev1:1234@dyetheworld-dev-shard-00-00-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-01-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-02-si1d6.mongodb.net:27017/DyeTheWorldDB?ssl=true&replicaSet=DyeTheWorld-Dev-shard-0&authSource=admin";
mongoose.connect(mongoURL, {
	useMongoClient: true	
});

app.use(bodyParser.json());

app.get('/players', function(req, res)
{
	MongoClient.connect(mongoURL, function(err, db)
	{
	  var col = db.collection('Player');

		col.find().toArray(function (err, result)
		{
			console.log(result);
			res.json(result);
		});
		db.close();
	});
});

// READ (one) (NOT WORKING YET)
app.get('/players/:id', (req, res, next) => {
  res.status(200).json({
      message: 'Player loaded',
      PlayerID: res.params.id
  });
});

// CREATE
app.post('/createplayer', (req, res, next) => {  
	const player = new Player({
		_id: new mongoose.Types.ObjectId(),
		_teamID: req.body._teamID,
		username: req.body.username,
		password: req.body.password,
		totalDistance: req.body.totalDistance
		//Date: req.body.Date
	});
	player.save().then(result => {
		console.log(result);
		res.status(201).json({
			message: "Handling POST requests to /createPlayer",
			createdPlayer: result
		});
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
});

module.exports = app;