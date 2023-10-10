class Promocao{

    #id_promocao
    #nome_promocao
    #dt_start_promocao
    #dt_end_promocao
    #desc_promocao
    #ativa_promocao

    constructor(id_promocao,nome_promocao,dt_start_promocao,dt_end_promocao,desc_promocao,ativa_promocao,){
        this.#id_promocao = id_promocao
        this.#nome_promocao = nome_promocao 
        this.#dt_start_promocao = dt_start_promocao
        this.#dt_end_promocao = dt_end_promocao
        this.#desc_promocao = desc_promocao
        this.#ativa_promocao = ativa_promocao
    }

    get id_promocao(){
        return this.#id_promocao
    }

    set id_promocao(value){
        this.#id_promocao = value
    }

    get nome_promocao(){
        return this.#nome_promocao
    }

    set nome_promocao(value){
        this.#nome_promocao = value
    }
    
    get dt_start_promocao(){
        return this.#dt_start_promocao
    }

    set dt_start_promocao(value){
        this.#dt_start_promocao = value
    }

     get dt_end_promocao(){
        return this.#dt_end_promocao
    }

    set dt_end_promocao(value){
        this.#dt_end_promocao = value
    }

    get desc_promocao(){
        return this.#desc_promocao
    }

    set desc_promocao(value){
        this.#desc_promocao = value
    }
    
    get ativa_promocao(){
        return this.#ativa_promocao
    }

    set ativa_promocao(value){
        this.#ativa_promocao = value
    }

    toJson(){

        return {
            "id_promocao": this.#id_promocao,
            "nome_promocao": this.#nome_promocao,
            "dt_start_promocao": this.#dt_start_promocao,
            "dt_end_promocao": this.#dt_end_promocao,
            "desc_promocao": this.#desc_promocao,
            "ativa_promocao": this.#ativa_promocao
        }
      
    }
    
}

module.exports = Promocao