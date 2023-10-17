const Skin = require('../Model/SkinsModel')
const Db = require('../../repository/Database')

class SkinDAO {

    #db

    constructor() {
        this.#db = Db
    }

    async consultarTodos() {

        let list_skins = []

        const query = await this.#db.SelectSkin()

        for (let index = 0; index < query.length; index++) {

            const skin = new Skin()


            skin.id = query[index].SkId
            skin.categoria = query[index].SkCatg
            skin.nome = query[index].SkName
            skin.desc = query[index].SkDesc
            skin.genero = query[index].SkGenr
            skin.valor = query[index].SkValue
            skin.raridade = query[index].SkRar 
            skin.foto1 = query[index].SkFt1


            list_skins.push(skin.toJson())
        }

        return list_skins
    }

}


module.exports = SkinDAO