const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const Point = require('../models/point');
const Polygon = require('../models/polygon');

const MongoClient = require('mongodb').MongoClient;
var mongoURL = "mongodb://MongoDB-Dev1:1234@dyetheworld-dev-shard-00-00-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-01-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-02-si1d6.mongodb.net:27017/DyeTheWorldDB?ssl=true&replicaSet=DyeTheWorld-Dev-shard-0&authSource=admin";
mongoose.connect(mongoURL, {
	useMongoClient: true	
});

app.use(bodyParser.json());

app.get('/points', function(req, res)
{
	MongoClient.connect(mongoURL, function(err, db)
	{
	  var col = db.collection('Point');

		col.find().toArray(function (err, result)
		{
			console.log(result);
			res.json(result);
		});
		db.close();
	});
});

// CREATE
app.post('/createpoint', (req, res, next) => {  
	const point = new Point({
		_id: new mongoose.Types.ObjectId(),
		//ID: req.body.ID,
		_polygonID: req.body._polygonID,
		latitude: req.body.latitude,
		longitude: req.body.longitude
		//Date: req.body.Date
	});
	point.save().then(result => {
		console.log(result);
		res.status(201).json({
			message: "Handling POST requests to /createpoint",
			createdPoint: result
		});
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
});

module.exports = app;