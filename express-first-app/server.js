const express = require('express')

const app = express()

app.get('/hello',(req,res) => {
    let name = 'guest'
    if(req.query.user) { name = req.query.user }
    res.send('Hello World ' + name)
})
app.use('/abc',express.static(__dirname + '/public'))

app.listen(4000, () => {
    console.log('Server Starting ...');
    setTimeout( () => {
        console.log("Server Started on http://localhost:4000")
    },2000)
})