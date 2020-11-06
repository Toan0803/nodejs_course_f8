const express = require('express')
const router = express.Router()

const CourseController = require('../app/controller/MeController')

router.get('/stored/courses', CourseController.storedCourses)
router.get('/trush/courses', CourseController.trushCourses)

module.exports = router