// const { path } = require('express/lib/application.js')
const AtractionDAO = require('../DAO/AtractionsDAO.js')

module.exports = (app) => {

    app.get("/getAllAtrativos", async (req, res) => {        
        const atractionDAO = new AtractionDAO()

        res.setHeader("Access-Control-Allow-Origin", "*")
        //Retorna no formato Json
        res.json(await atractionDAO.consultarTodos())        
    })
        // app.get("/atrativos", async (req, res) => {    
        //     res.sendFile(path.resolve() )    
        // })
    app.post("/atrativos",  async (req, res) => {})

        app.delete("/atrativos/:id" , async (req, res) => {
            res.setHeader("Access-Control-Allow-Origin", "*")
            const atractionDAO = new AtractionDAO
            const status = await atractionDAO.apagar(req.params.id)
    
            res.json(
                status
            )
        })
}


    







