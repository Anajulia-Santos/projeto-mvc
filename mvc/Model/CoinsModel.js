class Coins{

    #id_coins
    #nome_coins
    #value_coins
    #image_coins

    constructor(id_coins,nome_coins,value_coins,image_coins,){
        this.#id_coins = id_coins
        this.#nome_coins = nome_coins 
        this.#value_coins = value_coins
        this.#image_coins = image_coins
    }

    get id_coins(){
        return this.#id_coins
    }

    set id_coins(value){
        this.#id_coins = value
    }

    get nome_coins(){
        return this.#nome_coins
    }

    set nome_coins(value){
        this.#nome_coins = value
    }
    
     get value_coins(){
        return this.#value_coins
    }

    set value_coins(value){
        this.#value_coins = value
    }

    get image_coins(){
        return this.#image_coins
    }

    set image_coins(value){
        this.#image_coins = value
    }

    toJson(){

        return {
            "id_coins": this.#id_coins,
            "nome_coins": this.#nome_coins,
            "value_coins": this.#value_coins,
            "image_coins": this.#image_coins
        }
      
    }
    
}

module.exports = Coins