const router = require('express').Router()
const { Campus } = require('../db')

router.get('/', async (req, res) => {
    try {
        const campuses = await Campus.findAll()
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

router.post('/', async (req, res) => {
    try {
        const newCampus = await Campus.create(req.body)
        res.json(newCampus)
    } catch(error){
        res.send(error.message)
    }
})

module.exports = router