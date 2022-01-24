const router = require('express').Router()
const { Student, db } = require('../db')


router.get('/', async (req, res) => {
    try {
        const students = 
            await Student.findAll({order : [
                ['id' , 'ASC']
            ]
        })
        res.status(200).send(students) 
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        res.status(200).send(student)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try{
        const newStudent = await Student.create(req.body)
        res.status(200).send(newStudent)
    } catch(error){
        res.status(404).send(error.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        await Student
            .update({
                fname : req.body.fname || student.fname,
                lname : req.body.lname || student.lname,
                imageUrl : req.body.imageUrl || student.imageUrl,
                email : req.body.email || student.email,
                gpa : req.body.gpa || student.gpa,
                campusId : req.body.campusId || student.campusId
            },
            {where : {id : req.params.id}})
        res.status(200).send(Student.findByPk(req.params.id))
    } catch(error){
        res.status(404).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        //const studentId = Student.findByPk(req.params.id)
        await Student.destroy({where : {id : req.params.id}})
        res.status(200).send(`Successfully deleted student`)
    }catch(error){
        res.status(404).send(error.message)
    }
})



module.exports = router