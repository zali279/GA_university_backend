const express = require('express')
const router = express.Router()
const studentsCtrl = require('../controller/students')

router.get('/', studentsCtrl.index)
router.get('/:id', studentsCtrl.show)

router.post('/', studentsCtrl.addStudent)

router.delete('/:id', studentsCtrl.deleteStudent)

router.post('/:id/courses/:courseId', studentsCtrl.addCourseWithScore)

router.put('/:id/scores/:scoreId', studentsCtrl.editScore)
router.delete('/:id/scores/:scoreId', studentsCtrl.removeCourseWithGrade)

module.exports = router
