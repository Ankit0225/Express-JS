const route = require('express').Router()

let todo = [
    {task: "This is First Task"},
    {task: "This is Second Task"}
]

route.get('/', function (req,res) {
    res.render('todo', {todo})
})

route.post('/',function (req,res) {
    todo.push({
        task: req.body.newtodo
    })
    res.redirect('todo')
})

module.exports = route