const express = require('express')
const app = express()

const post = 3000

app.get('/', (req, res) => {
    res.send('Hello world!!!!!!!!')
})

app.listen(post, () => {
    console.log(`Đã chạy ở cổng ${post}`);
})  