const MissionDAO = require('../DAO/MissionsDAO.js')

module.exports = (app) => {

    app.get("/getAllMissions", async (req, res) => {        
        const MissionDAO = new MissionDAO()

        //Retorna no formato Json
        res.json(await MissionDAO.consultarTodos())        
    })
        
}








