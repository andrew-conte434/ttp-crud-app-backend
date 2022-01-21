const db = require('./database')
const Campus = require('./campuses')
const Student = require('./students')

//Associations
Campus.hasMany(Student)
Student.belongsTo(Campus)

module.exports = {
    db,
    Campus,
    Student
}