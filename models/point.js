const mongoose = require('mongoose');

const pointSchema = mongoose.Schema({
  ObjectId: mongoose.Schema.Types.ObjectId,
  ID: mongoose.Schema.Types.Number,
  PolygonID: mongoose.Schema.Types.Number,  
  Latitude: mongoose.Schema.Types.Number,
  Longitude: mongoose.Schema.Types.Number,
  //TimeStamp: mongoose.Schema.Types.Date
});

module.exports = mongoose.model('Point', pointSchema, 'Point');