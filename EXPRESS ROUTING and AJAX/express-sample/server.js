const express = require('express');

const any = express();
const todoRoute = require('./route/todo')


any.use(express.json())

any.use(express.urlencoded({extended: true}))

any.get('/hello',function (req,res) {
    res.send("Hello")
})

any.use('/public', express.static(__dirname + "/public"))

any.use('/todo', todoRoute)

any.listen(9090, () => {
   setTimeout(()=> {
     console.log('Server Started on http://localhost:9090');
   },2000)
})