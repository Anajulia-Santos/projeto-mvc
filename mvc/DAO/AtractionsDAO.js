const Atrativo = require('../Model/AtrativosModel')
const Db = require('../../repository/Database')

class AtractionDAO{

    #db

    constructor(){
        this.#db = Db
    }

    async consultarTodos(){

        let list_atraction = []

        const query = await this.#db.SelectAtrativos()

        for (let index = 0; index < query.length; index++) {

            const atrativo = new Atrativo()

            atrativo.id = query[index].AtId
            atrativo.nome = query[index].AtName
            atrativo.lat = query[index].AtLat
            atrativo.long = query[index].AtLong
            atrativo.desc = query[index].AtDesc
            atrativo.image = query[index].AtImg

            list_atraction.push(atrativo.toJson())     
        }
       
        return list_atraction
    }

}


module.exports = AtractionDAO