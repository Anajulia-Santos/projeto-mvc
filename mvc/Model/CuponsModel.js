class Cupons{

    #id_cupons
    #nome_cupons
    #codigo_cupons
    #validade_cupons
    #valor_cupons

    constructor(id_cupons,nome_cupons,codigo_cupons,validade_cupons,valor_cupons,){
        this.#id_cupons = id_cupons
        this.#nome_cupons = nome_cupons 
        this.#codigo_cupons = codigo_cupons
        this.#validade_cupons = validade_cupons
        this.#valor_cupons = valor_cupons
    }

    get id_cupons(){
        return this.#id_cupons
    }

    set id_cupons(value){
        this.#id_cupons = value
    }

    get nome_cupons(){
        return this.#nome_cupons
    }

    set nome_cupons(value){
        this.#nome_cupons = value
    }
    
    get codigo_cupons(){
        return this.#codigo_cupons
    }

    set codigo_cupons(value){
        this.#codigo_cupons = value
    }

     get validade_cupons(){
        return this.#validade_cupons
    }

    set validade_cupons(value){
        this.#validade_cupons = value
    }

    get valor_cupons(){
        return this.#valor_cupons
    }

    set valor_cupons(value){
        this.#valor_cupons = value
    }

    toJson(){

        return {
            "id_cupons": this.#id_cupons,
            "nome_cupons": this.#nome_cupons,
            "codigo_cupons": this.#codigo_cupons,
            "validade_cupons": this.#validade_cupons,
            "valor_cupons": this.#valor_cupons,
        }
      
    }
    
}

module.exports = Cupons