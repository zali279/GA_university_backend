const express = require('express')
const router = express.Router()
const coursesCtrl = require('../controller/courses')

router.pose('/', coursesCtrl.addCourse)

module.exports = router
