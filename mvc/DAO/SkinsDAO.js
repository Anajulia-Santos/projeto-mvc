const Skin = require('../Model/SkinsModel')
const Db = require('../repository/Database')

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


            skin.id = query[index].id_skin 
            skin.nome = query[index].nome_skin
            skin.categoria = query[index].categoria_skin
            skin.desc = query[index].desc_skin
            skin.genero = query[index].genero_skin
            skin.valor = query[index].valor_skin
            skin.raridade = query[index].raridade_skin
            skin.foto1 = query[index].foto1_skin
            skin.foto2 = query[index].foto2_skin



            list_skins.push(skin.toJson())
        }

        return list_skins
    }

}


module.exports = SkinDAO