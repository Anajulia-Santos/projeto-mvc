// const Atrativo = require('../Model/AtrativosModel')
// const Db = require('../repository/Database')

// class AtractionDAO{

//     #db

//     constructor(){
//         this.#db = Db
//     }

//     async consultarTodos(){

//         let list_atraction = []

//         const query = await this.#db.SelectAtrativos()

//         for (let index = 0; index < query.length; index++) {

//             const atrativo = new Atrativo()

//             atrativo.id = query[index].id_atrativos
//             atrativo.nome = query[index].nome_atrativo
//             atrativo.lat = query[index].lat_atrativo
//             atrativo.long = query[index].long_atrativo
//             atrativo.desc = query[index].desc_atrativo
//             atrativo.image = query[index].image_atrativo

//             list_atraction.push(atrativo.toJson())     
//         }
//         console.log(list_atraction)
//         return list_atraction

//     }

//     async cadastrar(nome,latitude,longitude,descricao,imagem){

//         const atrativo = new Atrativo(nome,latitude,longitude,descricao,imagem)

//         atrativo.desc = descricao
//         atrativo.image = imagem

//         const sql = await this.#db.insertAtrativo(atrativo.toJson())

//         return sql.insertId;
//     }

//     async apagar(id){
//         const linhaAfetada = await this.#db.deleteAtrativos(id)
//         return linhaAfetada.affectedRows
//     }
// }


// module.exports = AtractionDAO

const Atrativo = require('../Model/AtrativosModel')
const Db = require('../repository/Database')

class AtrativoDAO {

    #db

    constructor() {
        this.#db = new Db()
    }

    async consultarUm(id) {

        const query = await this.#db.selectAtrativos()

        const atrativo = new Atrativo()

        if (query) {
            atrativo.id = query[0].id_atrativos
            atrativo.nome = query[0].nome_atrativo
            atrativo.latitude = query[0].lat_atrativo
            atrativo.longitude = query[0].long_atrativo
            atrativo.descricao = query[0].desc_atrativo
            atrativo.imagem = query[0].image_atrativo
        }

        return atrativo.toJson()
    }

    async cadastrar(nome, lat, long, desc, image) {

        const atrativo = new Atrativo(nome, lat, long)

        atrativo.nome = nome
        atrativo.lat = lat
        atrativo.long = long
        atrativo.desc = desc
        atrativo.image = image

        const sql = await this.#db.insertAtrativo(atrativo.toJson())

        return sql.insertId;
    }
    async atualizar(nome, lat, long, desc, image) {

        const atrativo = new Atrativo(nome, lat, long)
        atrativo.desc = desc
        atrativo.lat = image
        atrativo.long = long
        atrativo.desc = desc
        atrativo.image = image


        const sql = await this.#db.updateAtrativos(atrativo.toJson())

        return sql.updateAtrat;

    }

    async apagar(id) {
        const linhasAfetadas = await this.#db.deleteAtrativos(id)
        return linhasAfetadas.affectedRows
    }



}


module.exports = AtrativoDAO