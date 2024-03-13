const express = require('express')
const router = express.Router()
const coursesCtrl = require('../controller/courses')

router.get('/:courseName', coursesCtrl.getStudentsByCourse)

router.post('/', coursesCtrl.addCourse)

router.get('/', coursesCtrl.getAllCourses)

module.exports = router
