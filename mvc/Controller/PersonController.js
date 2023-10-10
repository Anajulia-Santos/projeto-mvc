const Personagem = require('../Model/PersonModels.js')

module.export = (app) => {
    app.get("/getAllPersons", (req, res) => {

        res.json({
            "status":"OK"
        })
    })
}

