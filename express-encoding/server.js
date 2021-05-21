const express = require('express')

const app = express()

app.use('/' , express.static(__dirname + '/public'))

function decryptQueryParam(req, res, next) {

    // TO DO: decrypt all query params as per our logic
    for(let p in req.query) {
        let data = req.query[p] 
        data = new Buffer(data, 'ascii').toString('base64')
        req.query[p] = data
    }


   next()
}

function decodeQueryBAse64(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q]
        data  = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval', decryptQueryParam , decodeQueryBAse64, (req,res) => {
    console.log(req.query);
    // / TODO: eval the code actually
    
    res.send('result')
    

})

app.listen('3232', () => {
   console.log('Server Started on http://localhost:3232');
})