const express = require('express')
const router = express.Router()
const studentsCtrl = require('../controller/students')

router.get('/',studentsCtrl.index )
router.get('/:id',studentsCtrl.show )

router.post('/',studentsCtrl.addStudent)


module.exports = router
