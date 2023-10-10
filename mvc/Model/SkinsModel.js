class Skins {

    #id_skin
    #categoria_skin
    #nome_skin
    #desc_skin
    #dtnasc_gamer
    #genero_skin
    #valor_skin

    constructor(id_skin, categoria_skin, nome_skin, desc_skin, dtnasc_gamer, genero_skin, valor_skin,) {
        this.#id_skin = id_skin
        this.#categoria_skin = categoria_skin
        this.#nome_skin = nome_skin
        this.#desc_skin = desc_skin
        this.#dtnasc_gamer = dtnasc_gamer
        this.#genero_skin = genero_skin
        this.#valor_skin = valor_skin
    }

    get id_skin() {
        return this.#id_skin
    }

    set id_skin(value) {
        this.#id_skin = value
    }

    get categoria_skin() {
        return this.#categoria_skin
    }

    set categoria_skin(value) {
        this.#categoria_skin = value
    }

    get nome_skin() {
        return this.#nome_skin
    }

    set nome_skin(value) {
        this.#nome_skin = value
    }

    get desc_skin() {
        return this.#desc_skin
    }

    set desc_skin(value) {
        this.#desc_skin = value
    }

    get dtnasc_gamer() {
        return this.#dtnasc_gamer
    }

    set dtnasc_gamer(value) {
        this.#dtnasc_gamer = value
    }

    get genero_skin() {
        return this.#genero_skin
    }

    set genero_skin(value) {
        this.#genero_skin = value
    }

    get valor_skin() {
        return this.#valor_skin
    }

    set valor_skin(value) {
        this.#valor_skin = value
    }

    toJson() {

        return {
            "id_skin": this.#id_skin,
            "categoria_skin": this.#categoria_skin,
            "nome_skin": this.#nome_skin,
            "desc_skin": this.#desc_skin,
            "dtnasc_gamer": this.#dtnasc_gamer,
            "genero_skin": this.#genero_skin,
            "valor_skin": this.#valor_skin
        }

    }

}

module.exports = Skins