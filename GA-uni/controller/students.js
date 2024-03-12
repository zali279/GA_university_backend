const { Student, Score, Course } = require('../models')

const calculateGPA = async (student) => {
  let totalCredits = 0
  let totalPoints = 0
  student.scores.forEach((score) => {
    //  const course = await Course.findById(score.course)
    totalPoints += score.score * 3
    totalCredits += 3
  })

  const gpa = totalPoints / totalCredits
  return parseFloat(gpa.toFixed(2))
}
const index = async (req, res) => {
  try {
    const students = await Student.find({}).populate('scores')
    const studentsWithGPA = students.map((student) => {
      let totalCredits = 0
      let totalPoints = 0

      if (student.scores.length > 0) {
        student.scores.forEach((score) => {
          totalPoints += score.score * 3
          totalCredits += 3
        })
      }

      const gpa = totalCredits !== 0 ? totalPoints / totalCredits : 0
      return { ...student.toObject(), gpa: parseFloat(gpa.toFixed(2)) }
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
    const { id, courseId } = req.params
    const newScore = await Score.create({ ...req.body, courseId })
    const student = await Student.findById(id)
    student.scores.push(newScore._id)
    await student.save()

    await student.populate('scores')
    let totalCredits = 0
    let totalPoints = 0
    for (const score of student.scores) {
      totalPoints += score.score * 3
      totalCredits += 3
    }
    let gpa = 0
    if (totalCredits !== 0) {
      gpa = totalPoints / totalCredits
    }
    console.log(gpa)

    res.send({ student, gpa: parseFloat(gpa.toFixed(2)) })
  } catch (err) {
    console.error(err)
  }
}

const editScore = async (req, res) => {
  try {
    const { id, scoreId } = req.params

    await Score.findByIdAndUpdate(scoreId, req.body)

    const student = await Student.findById(id).populate('scores')

    const updatedStudentScores = student.scores.map((score) => {
      if (score._id.toString() === scoreId) {
        return { ...score.toObject(), ...req.body }
      }
      return score
    })

    student.scores = updatedStudentScores
    await student.save()
    await student.populate('scores')
    console.log('student', student)
    let totalCredits = 0
    let totalPoints = 0
    for (const score of student.scores) {
      totalPoints += score.score * 3
      totalCredits += 3
    }
    let gpa = 0
    if (totalCredits !== 0) {
      gpa = totalPoints / totalCredits
    }
    res.send({ student, gpa: parseFloat(gpa.toFixed(2)) })
  } catch (err) {
    console.error(err)
  }
}
module.exports = {
  index,
  show,
  addStudent,
  deleteStudent,
  addCourseWithScore,
  editScore
}
