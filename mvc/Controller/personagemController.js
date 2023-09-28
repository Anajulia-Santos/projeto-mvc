const Personagem = require('../Model/PersonagemModels.js')

module.export = (app) => {
    app.get("/getAllPersons", (req, res) => {

        res.json({
            "status":"OK"
        })
    })
}

