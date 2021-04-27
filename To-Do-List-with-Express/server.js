const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

let tasks = [
    'sample task'
]

app.get('/', (req,res) => {
    let tasklist = tasks.map(t =>`<li>${t}</li>`).join('\n')
    res.send(`<html>
    <body>
      <Form action='/' method="POST">
      <input name="addtask">
      <button type="submit">ADD</button>
      <ul>
       ${tasklist}
      </ul>
      </Form>
    </body>
    </html>`)
})

app.post('/',(req,res) => {
    tasks.push(req.body.addtask)
    res.redirect('/')
})

app.listen(1234,() => {
    console.log('Starting ...')
    console.log()
    console.log('Started')
})