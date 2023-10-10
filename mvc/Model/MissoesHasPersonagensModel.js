class MissoesPerson{

    #missoes_id_missao
    #personagens_id_personagem

    constructor(missoes_id_missao, personagens_id_personagem,){
        this.#missoes_id_missao = missoes_id_missao 
        this.#personagens_id_personagem = personagens_id_personagem 
    }

    get missoes_id_missao(){
        return this.#missoes_id_missao
    }

    set missoes_id_missao(value){
        this.#missoes_id_missao = value
    }

    get personagens_id_personagem(){
        return this.#personagens_id_personagem
    }

    set personagens_id_personagem(value){
        this.#personagens_id_personagem = value
    }
    

    toJson(){

        return {
            "missoes_id_missao": this.#missoes_id_missao,
            "personagens_id_personagem": this.#personagens_id_personagem,
        }
      
    }
    
}

module.exports = MissoesPerson