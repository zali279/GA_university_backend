const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
  name: String,
  email: String,
  scores: [{ type: Schema.Types.ObjectId, ref: 'Score' }]
})

module.exports = studentSchema
