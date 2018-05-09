const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

const Point = require('../models/point'); // What is this used for?
const Polygon = require('../models/polygon');

const MongoClient = require('mongodb').MongoClient;
var mongoURL = "mongodb://MongoDB-Dev1:1234@dyetheworld-dev-shard-00-00-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-01-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-02-si1d6.mongodb.net:27017/DyeTheWorldDB?ssl=true&replicaSet=DyeTheWorld-Dev-shard-0&authSource=admin";

mongoose.connect(mongoURL, {
	useMongoClient: true	
});
// For at de enkelte filer kan anvendes fra browser:
app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

app.get('/polygons', function(req, res){
  MongoClient.connect(mongoURL, function(err, db){
	  var col = db.collection('Polygon');

    col.find().toArray(function (err, result){
			console.log(result);
			res.json(result);
		});
		db.close();
	});
});

// Sort by teamID
app.get('/polygons/team/:_teamID', (req, res, next) => {  
	Polygon.find({ "_teamID" : ObjectId(req.params._teamID)})
	.then(polygonsFound => {
		if (!polygonsFound) { 
			return res.status(404).end(); 
		}
		return res.status(200).json(polygonsFound);
	})
	.catch(err => next(err));
});
		
//Create polygon
app.post('/createpolygon', (req, res, next) => {  

	const polygon = new Polygon({
		_id: new mongoose.Types.ObjectId(),
		
		_teamID: req.body._teamID,
		areaImperial: req.body.areaImperial
		
	});
	
	polygon
		.save()
		.then(result => {
			console.log(result);
			res.status(201).json({
				_id: result._id,
				message: "Handling POST requests to /createpolygon",
				createdPolygon: result
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
  });
  
  module.exports = app;