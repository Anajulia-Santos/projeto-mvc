const ItemDAO = require('../DAO/ItemDAO.js')

module.exports = (app) => {

    app.get("/getAllItems", async (req, res) => {        
        const itemDAO = new ItemDAO()

        res.setHeader("Access-Control-Allow-Origin", "*")
        //Retorna no formato Json
        res.json(await itemDAO.consultarTodos())        
    })
        
}








