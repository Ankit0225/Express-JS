const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('<h1 style = "color: red;">Hello World</h1>')
})

app.get('/greet', (req,res) => {
    let person ='Person'
    if(req.query.person)
    person = req.query.person
    res.send('Good Morning ' + person)
})

app.listen(3333, () => {
    console.log('server started on http://localhost:3333');
})