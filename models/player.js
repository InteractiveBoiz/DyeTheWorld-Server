const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  ObjectId: mongoose.Schema.Types.ObjectId,
  // ID: mongoose.Schema.Types.Number,
  Team_ID: mongoose.Schema.Types.Number,  
  Username: mongoose.Schema.Types.String,
  Password: mongoose.Schema.Types.String,
  TotalDistance: mongoose.Schema.Types.Number
});

module.exports = mongoose.model('Player', playerSchema, 'Player');