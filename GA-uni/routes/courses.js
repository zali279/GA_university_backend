const express = require('express')
const router = express.Router()
const coursesCtrl = require('../controller/courses')

router.get('/:courseName', coursesCtrl.getStudentsByCourse)
router.get('/', coursesCtrl.getAllCourse)
router.get('/course/:courseId', coursesCtrl.getOneCourse)

router.post('/', coursesCtrl.addCourse)

module.exports = router
