class Personagens {

    #id
    #nome
    #genero
    #tipo
    #totalcoin
    #latitude
    #longitude

    constructor(id, nome, genero, tipo, totalcoin, latitude, longitude,) {
        this.#id = id
        this.#nome = nome
        this.#genero = genero
        this.#tipo = tipo
        this.#totalcoin = totalcoin
        this.#latitude = latitude
        this.#longitude = longitude
    }

    get id() {
        return this.#id
    }

    set id(value) {
        this.#id = value
    }

    get nome() {
        return this.#nome
    }

    set nome(value) {
        this.#nome = value
    }

    get genero() {
        return this.#genero
    }

    set genero(value) {
        this.#genero = value
    }

    get tipo() {
        return this.#tipo
    }

    set tipo(value) {
        this.#tipo = value
    }

    get totalcoin() {
        return this.#totalcoin
    }

    set totalcoin(value) {
        this.#totalcoin = value
    }

    get latitude_lat() {
        return this.#latitude
    }

    set latitude(value) {
        this.#latitude = value
    }

    get longitude() {
        return this.#longitude
    }

    set longitude(value) {
        this.#longitude = value
    }

    toJson() {

        return {
            "id": this.#id,
            "nome": this.#nome,
            "genero": this.#genero,
            "tipo": this.#tipo,
            "totalcoin": this.#totalcoin,
            "latitude": this.#latitude,
            "longitude": this.#longitude
        }

    }

}

module.exports = Personagens