const mongoose = require('mongoose');

const pointSchema = mongoose.Schema({
  ObjectId: mongoose.Schema.Types.ObjectId,
  // ID: mongoose.Schema.Types.Number,
  _polygonID: mongoose.Schema.Types.ObjectId,  
  latitude: mongoose.Schema.Types.Number,
  longitude: mongoose.Schema.Types.Number,
  //TimeStamp: mongoose.Schema.Types.Date
});

module.exports = mongoose.model('Point', pointSchema, 'Point');