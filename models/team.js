const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  ObjectId: mongoose.Schema.Types.ObjectId,
  score: mongoose.Schema.Types.Number
});

module.exports = mongoose.model('Team', teamSchema, 'Team');