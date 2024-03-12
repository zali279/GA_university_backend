const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
  name: String,
  email: String,
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
})

module.exports = studentSchema
