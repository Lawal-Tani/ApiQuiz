// const express = require('express')
// const students = require('./data/students')
// const cors = require('cors')

// const app = express()


// port = process.env.PORT || 3000


// app.use(cors())

// app.listen(port)



// app.get('/', (req , res)=>{
//     res.send('Api is running')
// })

// app.get('/api/students', (req , res)=>{
//     res.send(questions)
// })

// app.get('/api/students/:id', (req , res)=>{


//     const student = students.find((q) => String(q.id) == req.params.id)

//     res.send(student)
//     console.log(student)
// })

// console.log('server is running on port ' + port);

const express = require('express')
const regnums = require('./data/students')
const cors = require('cors')
const students = require('./data/students')
app = express()


port = process.env.PORT || 2000

app.use(cors())

app.listen(port)


// app.get('/', (req, res)=>{
//     res.send('Api is running successfully')
// })


app.get('/api/students', (req, res)=>{
    res.send(students)
})


app.get('/api/students/:id', (req, res)=>{

    const student = students.find((r) => String(r.id ) === String(req.params.id))
    res.send(students)
})


console.log(students);


console.log("server is running on port " + port);