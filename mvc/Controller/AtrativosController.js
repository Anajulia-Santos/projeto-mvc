const AtractionDAO = require('../DAO/AtractionsDAO.js')

module.exports = (app) => {

    app.get("/getAllAtrativos", async (req, res) => {        
        const atractionDAO = new AtractionDAO()

        //Retorna no formato Json
        res.json(await atractionDAO.consultarTodos())        
    })
        
}








