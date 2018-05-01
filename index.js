const express = require('express');
const app = express();
const path = __dirname + "/public/";
var bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
var mongoURL = "mongodb://MongoDB-Dev1:1234@dyetheworld-dev-shard-00-00-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-01-si1d6.mongodb.net:27017,dyetheworld-dev-shard-00-02-si1d6.mongodb.net:27017/DyeTheWorldDB?ssl=true&replicaSet=DyeTheWorld-Dev-shard-0&authSource=admin";

// For at de enkelte filer kan anvendes fra browser:
app.use(bodyParser.urlencoded({extended : true}));

// For at css skal kunne anvendes

app.use(express.static(path));
app.use(bodyParser.json());

app.get('/polygons', function(req, res)
{
	MongoClient.connect(mongoURL, function(err, db)
	{
	  var col = db.collection('Polygon');

		col.find().toArray(function (err, result)
		{
			console.log(result);
			res.json(result);
		});
		db.close();
	});
});

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

app.listen(process.env.PORT || 3000);