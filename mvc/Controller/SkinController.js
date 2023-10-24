const SkinDao = require('../DAO/SkinsDAO.js')

module.exports = (app) => {

    app.get("/getAllSkins", async (req, res) => {        
        const skinDao = new SkinDao()

        res.setHeader("Access-Control-Allow-Origin", "*")
        //Retorna no formato Json
        res.json(await skinDao.consultarTodos())        
    })
        
}








