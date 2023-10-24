const Mission = require('../Model/MissoesModel')
const Db = require('../repository/Database')

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

            mission.id = query[index].id_missao
            mission.nome = query[index].nome_missao
            mission.desc = query[index].desc_missao
            mission.recomp = query[index].recompensa_missao

            list_missions.push(mission.toJson())     
        }
       
        return list_missions
    }

}


module.exports = MissionDAO