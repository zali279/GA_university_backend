const { Course, Student } = require('../models')

const addCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body)
    res.send(course)
  } catch (error) {
    console.log(error)
  }
}
const getStudentsByCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ name: req.params.courseName })
    console.log('course', course)
    await course.populate('students').execPopulate()
    res.send(course)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  addCourse,
  getStudentsByCourse
}
