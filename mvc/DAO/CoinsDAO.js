const Coins = require('../Model/CoinsModel')
const Db = require('../repository/Database')

class CoinsDAO{

    #db

    constructor(){
        this.#db = Db
    }

    async consultarTodos(){

        let list_coins = []

        const query = await this.#db.SelectCoins()
console.log(query)
        for (let index = 0; index < query.length; index++) {

            const coin = new Coins()

            coin.id = query[index].id_coin
            coin.nome = query[index].nome_coin
            coin.value = query[index].value_coin
            coin.image = query[index].image_coin

            list_coins.push(coin.toJson())     
        }
       
        return list_coins
    }

}


module.exports = CoinsDAO