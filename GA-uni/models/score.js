const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
  score: Number,
  letter: String,
  course: { type: Schema.Types.ObjectId, ref: 'Course' }
})

module.exports = scoreSchema
