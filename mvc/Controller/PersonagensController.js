const ItemDAO = require('../DAO/ItemDAO.js')

module.exports = (app) => {

    app.get("/getAllPersonagens", async (req, res) => {        
        const itemDAO = new ItemDAO()

        //Retorna no formato Json
        res.json(await itemDAO.consultarTodos())        
    })
        
}








