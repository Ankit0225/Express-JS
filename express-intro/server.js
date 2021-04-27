const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('<h1 style = "color: red;">Hello World</h1>')
})

app.listen(3333, () => {
    console.log('server started on http://localhost:3333');
})