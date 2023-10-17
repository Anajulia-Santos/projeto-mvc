const Personagem = require('../Model/PersonagensModel')
const Db = require('../../repository/Database')

class PersonagemDAO {

    #db

    constructor() {
        this.#db = Db
    }

    async consultarTodos() {

        let list_personagens = []

        const query = await this.#db.SelectPersonagem()

        for (let index = 0; index < query.length; index++) {

            const personagem = new Personagem()

            personagem.id = query[index].personagemId
            personagem.nome = query[index].personagemName
            personagem.genero = query[index].personagemGenr
            personagem.tipo = query[index].personagemTipo
            personagem.totalcoin = query[index].personagemTCooin
            personagem.start_latitude = query[index].personagemStlat
            personagem.start_longitude = query[index].personagemStlong

            list_personagens.push(personagem.toJson())
        }

        return list_personagens
    }

}


module.exports = PersonagemDAO