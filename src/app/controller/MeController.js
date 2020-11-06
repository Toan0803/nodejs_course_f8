
const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../until/mongoose')

class SiteController {

    storedCourses(req, res, next) {

        Course.find({})
            .then(course => res.render('me/storedCourses', { Courses: mutipleMongooseToObject(course) }))
            .catch(next)

    }
    trushCourses(req, res, next) {
        Course.findDeleted({})
            .then(course => res.render('me/trushcourses', { Courses: mutipleMongooseToObject(course) }))
            .catch(next)

    }
}

module.exports = new SiteController