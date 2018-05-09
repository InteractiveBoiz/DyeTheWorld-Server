const mongoose = require('mongoose');

const polygonSchema = mongoose.Schema({
  ObjectId: mongoose.Schema.Types.ObjectId,
  _teamID: mongoose.Schema.Types.ObjectId,
  areaImperial: mongoose.Schema.Types.Number
});

module.exports = mongoose.model('Polygon', polygonSchema, 'Polygon')