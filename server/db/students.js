const Sequelize = require('sequelize')
const { default: isEmail } = require('validator/lib/isEmail')
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
    imageUrl : {
        type : Sequelize.TEXT,
        defaultValue : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {isEmail : true}
    },
    gpa : {
        type : Sequelize.DECIMAL,
        allowNull : false
    }
})

module.exports = Student