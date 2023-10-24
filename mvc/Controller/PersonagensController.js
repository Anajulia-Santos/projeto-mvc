const PersonDAO = require('../DAO/PersonagensDAO.js')

module.exports = (app) => {

    app.get("/getAllPersonagens", async (req, res) => {        
        const personDAO = new PersonDAO()

        res.setHeader("Access-Control-Allow-Origin", "*")
        //Retorna no formato Json
        res.json(await personDAO.consultarTodos())        
    })
        
}








