const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:127.0.0.1:27017/coures_f8_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failure');
    }
}

module.exports = { connect }