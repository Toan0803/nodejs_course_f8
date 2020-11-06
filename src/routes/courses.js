const express = require('express')
const router = express.Router()

const CourseController = require('../app/controller/CourseController')

router.get('/create', CourseController.create)
router.post('/store', CourseController.store)
router.get('/:id/edit', CourseController.edit)
router.patch('/:id/restore', CourseController.restore)
router.put('/:id', CourseController.update)
router.delete('/:id/force', CourseController.forceDestroy)
router.delete('/:id', CourseController.destroy)
router.get('/:slug', CourseController.show)

module.exports = router