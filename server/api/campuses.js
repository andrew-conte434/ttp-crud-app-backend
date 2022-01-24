const router = require('express').Router()
const { Campus, Student, db } = require('../db')

router.get('/', async (req, res) => {
    try {
        const campuses = 
            await Campus.findAll({
                    order : [
                        ['id', 'ASC']
                    ]
                })
        res.status(200).send(campuses)
    } catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const campus = await Campus.findByPk(req.params.id)
        res.status(200).send(campus)
    } catch(error) {
        res.status(404).send(error.message)
    }
})

router.get('/:id/students', async (req, res) => {
    try {
        //const students = await Campus.getStudents({where : {id : req.params.id}})
        const students = await Student.findAll({where : {campusId : req.params.id}})
        res.status(200).send(students)
    } catch(error) {
        res.status(404).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const newCampus = await Campus.create(req.body)
        res.status(200).send(newCampus)
    } catch(error){
        res.send(error.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        await Campus
            .update({
                name : req.body.name,
                imageUrl : req.body.imageUrl,
                address : req.body.address,
                description : req.body.description
            },
            {where : {id : req.params.id}})
        res.status(204).send(Campus.findByPk(req.params.id))
    } catch(error){
        res.status(404).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    const name = await Campus.findByPk(req.params.id).getName()
    try {
        await Campus.destroy({where : {id : req.params.id}})
        res.status(200).send(`Successfully deleted ${name}`)
    } catch(error){
        res.status(404).send(error.message)
    }
})

module.exports = router