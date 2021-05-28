const express = require('express')

const app =express()

app.get('/', (req,res) => {
    res.send('Hello World')
})

function middleware1 (req,res,next) {
    console.log(req.url);
    cd
   next()
}

function middleware2 (req,res,next) {
    console.log(req.hostname);

    res.send('sgyuaukSAJHJ')
}

app.get('/a', middleware1, middleware2)

app.listen(3333, ()=> {
    console.log('Server Started on http://127.0.0.1:3333');
})