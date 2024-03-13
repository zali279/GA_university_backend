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
    await course.populate('students').execPopulate()
    res.send(course.students)
  } catch (error) {
    console.log(error)
  }
}
const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find({})
    res.send(courses)
  } catch (error) {
    console.log(error)
  }
}
const getOneCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId).populate(
      'students'
    )
    res.send(course)
  } catch (error) {
    console.log(error)
  }
}
const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.courseId)
    res.send({ message: 'Course deleted successfully' })
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  addCourse,
  getStudentsByCourse,
  getAllCourse,
  getOneCourse,
  deleteCourse
}
