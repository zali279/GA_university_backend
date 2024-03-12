const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  name: String,
  scores: [{ type: Schema.Types.ObjectId, ref: 'Score' }]
})

module.exports = courseSchema
