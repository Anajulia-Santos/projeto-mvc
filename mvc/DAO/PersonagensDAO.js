const Personagem = require('../Model/PersonagensModel')
const Db = require('../repository/Database')

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

            personagem.id = query[index].id_personagem
            personagem.nome = query[index].nome_personagem
            personagem.genero = query[index].genero_personagem
            personagem.tipo = query[index].tipo_personagem
            personagem.totalcoin = query[index].totalcoin_personagem
            personagem.start_latitude = query[index].start_latitude
            personagem.start_longitude = query[index].start_longitude

            list_personagens.push(personagem.toJson())
        }

        return list_personagens
    }

}


module.exports = PersonagemDAO