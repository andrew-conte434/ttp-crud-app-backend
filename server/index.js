const express = require('express')
const morgan = require('morgan')
const { db } = require('./db')
const api = require('./api/index')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api', api)

db.sync().then(() =>{
    console.log('db synced')
    app.listen(PORT, () =>
        console.log(`App is running on port: ${PORT}`)
    )
}).catch((err) => {
    console.log(err.message)
})