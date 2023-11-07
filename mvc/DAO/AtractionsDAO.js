const Atrativo = require('../Model/AtrativosModel')
const Db = require('../repository/Database')

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

            atrativo.id = query[index].id_atrativos
            atrativo.nome = query[index].nome_atrativo
            atrativo.lat = query[index].lat_atrativo
            atrativo.long = query[index].long_atrativo
            atrativo.desc = query[index].desc_atrativo
            atrativo.image = query[index].image_atrativo

            list_atraction.push(atrativo.toJson())     
        }
        console.log(list_atraction)
        return list_atraction
       
    }

    async cadastrar(nome,latitude,longitude,descricao,imagem){

        const atrativo = new Atrativo(nome,latitude,longitude,descricao,imagem)

        atrativo.desc = descricao
        atrativo.image = imagem

        const sql = await this.#db.insertAtrativo(atrativo.toJson())

        return sql.insertId;
    }

    async apagar(id){
        const linhaAfetada = await this.#db.deleteAtrativos(id)
        return linhaAfetada.affectedRows
    }
}


module.exports = AtractionDAO