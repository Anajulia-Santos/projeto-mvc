const Coins = require('../Model/CoinsModel')
const Db = require('../../repository/Database')

class CoinsDAO{

    #db

    constructor(){
        this.#db = Db
    }

    async consultarTodos(){

        let list_coins = []

        const query = await this.#db.SelectCoins()

        for (let index = 0; index < query.length; index++) {

            const coin = new Coins()

            coin.id = query[index].CoinId
            coin.nome = query[index].CoinName
            coin.valor = query[index].CoinValue
            coin.image = query[index].CoinImg

            list_coins.push(coin.toJson())     
        }
       
        return list_coins
    }

}


module.exports = CoinsDAO