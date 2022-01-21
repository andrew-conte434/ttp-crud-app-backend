const Sequelize = require('sequelize')
const db = require('./database')

const Student = db.define('student', {
    fname : {
        type : Sequelize.STRING,
        allowNull : false
    },
    lname : {
        type : Sequelize.STRING,
        allowNull : false
    },
    gender : {
        type : Sequelize.CHAR,
        allowNull : false
    },
    major : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

module.exports = Student