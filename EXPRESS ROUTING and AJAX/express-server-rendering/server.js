const express = require('express')

const todoroute = require('./routes/todo')

const server = express();

server.set('view engine', 'hbs')
server.set('views', __dirname + "/view")
server.use(express.json())

server.use(express.urlencoded({extended: true}))


server.use('/todo', todoroute)

server.listen(8080)