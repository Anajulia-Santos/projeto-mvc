const Mission = require('../Model/MissoesModel')
const Db = require('../../repository/Database')

class MissionDAO{

    #db

    constructor(){
        this.#db = Db
    }

    async consultarTodos(){

        let list_missions = []

        const query = await this.#db.SelectMissoes()

        for (let index = 0; index < query.length; index++) {

            const mission = new Mission()

            mission.id = query[index].missionId
            mission.nome = query[index].missionNome
            mission.desc = query[index].missionDesc
            mission.recomp = query[index].imissionRec

            list_missions.push(item.toJson())     
        }
       
        return list_missions
    }

}


module.exports = MissionDAO