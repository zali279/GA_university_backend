const express = require('express')
const router = express.Router()
const coursesCtrl = require('../controller/courses')

router.get('/:courseName', coursesCtrl.getStudentsByCourse)
router.get('/', coursesCtrl.getAllCourse)
router.get('/course/:courseId', coursesCtrl.getOneCourse)
router.delete('/:courseId', coursesCtrl.deleteCourse)

router.post('/', coursesCtrl.addCourse)

// router.get('/', coursesCtrl.getAllCourses)

module.exports = router
