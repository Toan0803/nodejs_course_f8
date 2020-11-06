const express = require('express')
const app = express()
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db')
const methodOverride = require('method-override')

db.connect()

const post = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json())
// HTTP logger
app.use(morgan('combined'))

app.use(methodOverride('_method'))

// template engine
app.engine('.hbs', handlebars({ 
    extname: '.hbs' ,
    helpers: {
        sum: (a, b) => a + b
    }
})
)

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources', 'views'))

route(app)

app.listen(post, () => {
    console.log(`Đã chạy ở cổng ${post}`);
})  