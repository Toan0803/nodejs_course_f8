const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    img: { type: String, maxlength: 255 },
    videoId: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});

// add plugin
mongoose.plugin(slug)
mongoose.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true })

module.exports = mongoose.model('Course', Course)