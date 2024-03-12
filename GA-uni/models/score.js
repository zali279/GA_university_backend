const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
  score: Number,
  letter: String
})

module.exports = scoreSchema
