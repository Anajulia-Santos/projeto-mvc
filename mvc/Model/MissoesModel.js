class Missoes {

    #id_missao
    #nome_missao
    #desc_missao
    #recompensa_missao

    constructor(id_missao, nome_missao, desc_missao, recompensa_missao) {
        this.#id_missao = id_missao
        this.#nome_missao = nome_missao
        this.#desc_missao = desc_missao
        this.#recompensa_missao = recompensa_missao
    }

    get id_missao() {
        return this.#id_missao
    }

    set id_missao(value) {
        this.#id_missao = value
    }

    get nome_missao() {
        return this.#nome_missao
    }

    set nome_missao(value) {
        this.#nome_missao = value
    }

    get desc_missao() {
        return this.#desc_missao
    }

    set desc_missao(value) {
        this.#desc_missao = value
    }

    get recompensa_missao() {
        return this.#recompensa_missao
    }

    set recompensa_missao(value) {
        this.#recompensa_missao = value
    }

    toJson() {

        return {
            "id_missao": this.#id_missao,
            "nome_missao": this.#nome_missao,
            "desc_missao": this.#desc_missao,
            "recompensa_missao": this.#recompensa_missao
        }

    }

}

module.exports = Missoes