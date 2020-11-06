const Course = require('../models/Course')
const { mongooseToObject } = require('../../until/mongoose')

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('course/show', {
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }
    create(req, res, next) {
        res.render('course/create')
    }

    store(req, res, next) {

        const formData = req.body
        formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`

        const course = new Course(formData)
        course.save()

        res.redirect('/me/stored/courses')
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('course/edit', { course: mongooseToObject(course) }))
            .catch(next)
    }
    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    //[DELETE] /course/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE FORCE] /course/:id
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[PATCH] /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController()