const CoinsDAO = require('../DAO/CoinsDAO.js')

module.exports = (app) => {

    app.get("/getAllCoins", async (req, res) => {        
        const coinsDAO = new CoinsDAO()

        res.setHeader("Access-Control-Allow-Origin", "*")
        //Retorna no formato Json
        res.json(await coinsDAO.consultarTodos())        
    })
        
}








