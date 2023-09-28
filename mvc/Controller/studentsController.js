const studentModel = require('../Model/studentModel.js')

module.export = (app) => {
    app.get("/getAllStudents", (req, res) => {

        const studentsList = []

        for (let count = 5; count > 0; count--) {
            const student = studentModel

            student.RA = 101
            student.Nome = "Ana Julia"
            student.DtIngressoCurso = "25/01/2023"
            student.Curso = "DEV"

            studentsList.push(student.RegistroJSON())

        }

        res.json(studentsList)
    })
}

