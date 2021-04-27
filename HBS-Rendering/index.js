const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')

let tasks = [
    'sample task'
]

app.get('/', (req,res) => {
   res.render('home', { 
       title: 'To Do List',
       tasks
   })
})

app.post('/',(req,res) => {
    tasks.push(req.body.addtask)
    res.redirect('/')
})

app.listen(5555,() => {
    console.log('Starting ...')
    console.log()
    console.log('Started')
})