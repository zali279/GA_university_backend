const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  name: String,
  description: String,
  creditHours: Number,
  teacher: String,
  // scores: [{ type: Schema.Types.ObjectId, ref: 'Score' }],
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
})

module.exports = courseSchema
