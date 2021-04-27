const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.send('<h1 style = "color: red;">Hello World</h1>')
})

app.get('/greet', (req,res) => {
    let person ='Person'
    if(req.query.person)
    person = req.query.person
    res.send('Good Morning ' + person)
})

// localhost:3333/{x}/{y}

app.get('/:city/:greeting', (req,res) => {
    res.send(req.params.greeting + ' to ' + req.params.city + '!')
})

app.get('/:person/:action', (req,res) => {
    res.send('Thank You ' + req.params.person + ' for ' + req.params.action)
})

app.post('/greet', (req,res) => {

    let person ='Person'
    console.log(req.body);
    if(req.body.person)
    person = req.body.person
    res.send('Good Evening ' + person)
})

app.get('/form',(req,res)=> {
    res.sendFile(__dirname + '/index.html')
})
app.listen(3333, () => {
    console.log('server started on http://localhost:3333');
})