const { Student } = require('../models')
const calculateGPA = (student) => {
  let totalCredits = 0
  let totalPoints = 0
  student.courses.forEach((course) => {
    course.scores.forEach((score) => {
      totalCredits += 1
      totalPoints += score.score
    })
  })
  if (totalCredits === 0) {
    return 0.0
  } else {
    const gpa = totalPoints / totalCredits
    return parseFloat(gpa.toFixed(2))
  }
}
const index = async (req, res) => {
  try {
    const students = await Student.find({}).populate('courses')
    const studentsWithGPA = students.map((student) => {
      const gpa = student.calculateGPA()
      return { ...student.toObject(), gpa }
    })

    res.send(studentsWithGPA)
  } catch (error) {
    console.log(error)
  }
}
const show = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('courses')
    res.send(student)
  } catch (error) {
    console.log(error)
  }
}
const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body)
    res.send(student)
  } catch (error) {
    console.log(error)
  }
}
const deleteStudent = async (req, res) => {
  try {
    await Student.deleteOne({ _id: req.params.id })
    res.send({ msg: 'Post Deleted', status: 'Ok' })
  } catch {
    console.log(error)
  }
}
const addCourseWithScore = async (req, res) => {
  try {
    const { id } = req.params
    const { courseName, score, letter } = req.body
    const student = await Student.findById(id)

    const newScore = {
      score,
      letter
    }
    // Find the course by name
    const existingCourse = student.courses.find(
      (course) => course.name === courseName
    )
    if (existingCourse) {
      // Add the new score to an existing course
      existingCourse.scores.push(newScore)
    } else {
      // Create a new course and add the score
      const newCourse = {
        name: courseName,
        scores: [newScore]
      }
      student.courses.push(newCourse)
    }
    // Save the updated student
    await student.save()
    // Calculate the GPA for the student
    const gpa = student.calculateGPA()
    res.send({ student, gpa })
  } catch (err) {
    console.error(err)
  }
}
module.exports = {
  index,
  show,
  addStudent,
  deleteStudent,
  addCourseWithScore
}
