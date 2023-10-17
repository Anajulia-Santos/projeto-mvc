const CoinsDAO = require('../DAO/CoinsDAO.js')

module.exports = (app) => {

    app.get("/getAllCoins", async (req, res) => {        
        const CoinsDAO = new CoinsDAO()

        //Retorna no formato Json
        res.json(await CoinsDAO.consultarTodos())        
    })
        
}








