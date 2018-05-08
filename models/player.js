const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  ObjectId: mongoose.Schema.Types.ObjectId,
  // ID: mongoose.Schema.Types.Number,
  _teamID: mongoose.Schema.Types.ObjectId,  
  username: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
  totalDistance: mongoose.Schema.Types.Number
});

module.exports = mongoose.model('Player', playerSchema, 'Player');