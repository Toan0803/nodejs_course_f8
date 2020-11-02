const Course = require('../models/Course')
const {mongooseToObject} = require('../../until/mongoose')

class CourseController {
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then(course =>  
            {
            res.render('course/show', {
            course: mongooseToObject(course)
        })})
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

        res.redirect('/') 
    }
}

module.exports = new CourseController()