const mongoose = require('mongoose');

const polygonSchema = mongoose.Schema({
  ObjectId: mongoose.Schema.Types.ObjectId,
  //ID: mongoose.Schema.Types.Number,
  _teamID: mongoose.Schema.Types.Number,
  areaImperial: mongoose.Schema.Types.Number

});

module.exports = mongoose.model('Polygon', polygonSchema, 'Polygon')