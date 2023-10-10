class Personagens {

    #id_personagem
    #nome_personagem
    #genero_personagem
    #tipo_personagem
    #totalcoin_personagem
    #start_latitude
    #start_longitude

    constructor(id_personagem, nome_personagem, genero_personagem, tipo_personagem, totalcoin_personagem, start_latitude, start_longitude,) {
        this.#id_personagem = id_personagem
        this.#nome_personagem = nome_personagem
        this.#genero_personagem = genero_personagem
        this.#tipo_personagem = tipo_personagem
        this.#totalcoin_personagem = totalcoin_personagem
        this.#start_latitude = start_latitude
        this.#start_longitude = start_longitude
    }

    get id_personagem() {
        return this.#id_personagem
    }

    set id_personagem(value) {
        this.#id_personagem = value
    }

    get nome_personagem() {
        return this.#nome_personagem
    }

    set nome_personagem(value) {
        this.#nome_personagem = value
    }

    get genero_personagem() {
        return this.#genero_personagem
    }

    set genero_personagem(value) {
        this.#genero_personagem = value
    }

    get tipo_personagem() {
        return this.#tipo_personagem
    }

    set tipo_personagem(value) {
        this.#tipo_personagem = value
    }

    get totalcoin_personagem() {
        return this.#totalcoin_personagem
    }

    set totalcoin_personagem(value) {
        this.#totalcoin_personagem = value
    }

    get start_latitude() {
        return this.#start_latitude
    }

    set start_latitude(value) {
        this.#start_latitude = value
    }

    get start_longitude() {
        return this.#start_longitude
    }

    set start_longitude(value) {
        this.#start_longitude = value
    }

    toJson() {

        return {
            "id_personagem": this.#id_personagem,
            "nome_personagem": this.#nome_personagem,
            "genero_personagem": this.#genero_personagem,
            "tipo_personagem": this.#tipo_personagem,
            "totalcoin_personagem": this.#totalcoin_personagem,
            "start_latitude": this.#start_latitude,
            "start_longitude": this.#start_longitude
        }

    }

}

module.exports = Personagens