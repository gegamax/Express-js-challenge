const express = require('express')
const router = express.Router()

let students = [
  { id: 1, name: "cj", age: 20 },
  { id: 1, name: "jone", age: 20 },
  { id: 2, name: "smith", age: 22 }
];

router.get('/', (req, res) => {
   res.status(200).json(students)
})
router.get('/:id', (req, res) => {
   console.log(req.rawHeaders)
   const studentId = parseInt(req.params.id);
   const student = students.find(s => s.id === studentId);
  if (!student) {
    return res.status(404).json({ message: "Student not found"});
  }
  res.status(200).json(student);
})

module.exports = router;
