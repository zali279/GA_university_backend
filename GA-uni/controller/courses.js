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

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('students', 'name');
    res.json(courses);
  } catch (error) {
    res.status(500).send({
      message: "Failed to retrieve courses",
      error: error.message
    });
  }
};
module.exports = {
  addCourse,
  getStudentsByCourse,
  getAllCourses
}
