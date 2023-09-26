const app = require('../../startup.js')
const schoolModel = require('../Model/schoolModel.js')

app.get("/getAllSchool", (req, res) => {
    
    const schoolList = []

    for(let count = 5; count > 0; count--){
        const school = schoolModel

        school.end = "Rua Alfa Boscoli, 508"
        school.nome = "Sesi"
        school.diretor = "Aline Michelini"
        school.tel = "534344554"
        school.cnpj = "5556547686326"

        schoolList.push(school.RegistroJSON())
       
    }

    res.json(schoolList)
})
