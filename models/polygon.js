const mongoose = require('mongoose');

const polygonSchema = mongoose.Schema({
  ObjectId: mongoose.Schema.Types.ObjectId,
  ID: mongoose.Schema.Types.Number,
  TeamID: mongoose.Schema.Types.Number,
  AreaImperial: mongoose.Schema.Types.Number

});

module.exports = mongoose.model('Polygon', polygonSchema, 'Polygon')