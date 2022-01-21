const Sequelize = require('sequelize')
const db = require('./database')

const Campus = db.define('campus', {
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    imageUrl : {
        type : Sequelize.TEXT
    },
    address : {
        type : Sequelize.STRING,
        allowNull : false
    },
    tuition : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

module.exports = Campus