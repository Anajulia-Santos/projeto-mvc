const MissionDAO = require('../DAO/MissionsDAO.js')

module.exports = (app) => {

    app.get("/getAllMissions", async (req, res) => {        
        const missionDAO = new MissionDAO()

        res.setHeader("Access-Control-Allow-Origin", "*")
        //Retorna no formato Json
        res.json(await missionDAO.consultarTodos())        
    })
        
}








