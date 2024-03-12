const mongoose = require('mongoose')
const studentSchema = require('./student')
const courseSchema = require('./course')
const scoreSchema = require('./score')

const Student = mongoose.model('Student', studentSchema)
const Course = mongoose.model('Course', courseSchema)
const Score = mongoose.model('Score', scoreSchema)

module.exports = {
  Student,
  Course,
  Score
}
