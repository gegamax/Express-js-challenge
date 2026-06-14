const express = require('express')
const router = require('./src/routes/student/student')
// const lab = require('./src/routes/lab/lab')
const app = express()
const port = 3000

app.use('/students', router)
// app.use('/lab', lab)

app.get('/', (req, res) => {
   res.status(200).json({"message": "Student API running"})
})

app.listen(port, ()=>{console.log(app listening on port ${port}`)})
