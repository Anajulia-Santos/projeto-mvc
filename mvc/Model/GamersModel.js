class Gamers {

    #id_gamer
    #nome_gamer
    #senha_gamer
    #email_gamer
    #dtnasc_gamer
    #personagens_id_personagem
    #coins_id_coin

    constructor(id_gamer, nome_gamer, senha_gamer, email_gamer, dtnasc_gamer, personagens_id_personagem, coins_id_coin,) {
        this.#id_gamer = id_gamer
        this.#nome_gamer = nome_gamer
        this.#senha_gamer = senha_gamer
        this.#email_gamer = email_gamer
        this.#dtnasc_gamer = dtnasc_gamer
        this.#personagens_id_personagem = personagens_id_personagem
        this.#coins_id_coin = coins_id_coin
    }

    get id_gamer() {
        return this.#id_gamer
    }

    set id_gamer(value) {
        this.#id_gamer = value
    }

    get nome_gamer() {
        return this.#nome_gamer
    }

    set nome_gamer(value) {
        this.#nome_gamer = value
    }

    get senha_gamer() {
        return this.#senha_gamer
    }

    set senha_gamer(value) {
        this.#senha_gamer = value
    }

    get email_gamer() {
        return this.#email_gamer
    }

    set email_gamer(value) {
        this.#email_gamer = value
    }

    get dtnasc_gamer() {
        return this.#dtnasc_gamer
    }

    set dtnasc_gamer(value) {
        this.#dtnasc_gamer = value
    }

    get personagens_id_personagem() {
        return this.#personagens_id_personagem
    }

    set personagens_id_personagem(value) {
        this.#personagens_id_personagem = value
    }

    get coins_id_coin() {
        return this.#coins_id_coin
    }

    set coins_id_coin(value) {
        this.#coins_id_coin = value
    }

    toJson() {

        return {
            "id_gamer": this.#id_gamer,
            "nome_gamer": this.#nome_gamer,
            "senha_gamer": this.#senha_gamer,
            "email_gamer": this.#email_gamer,
            "dtnasc_gamer": this.#dtnasc_gamer,
            "personagens_id_personagem": this.#personagens_id_personagem,
            "coins_id_coin": this.#coins_id_coin
        }

    }

}

module.exports = Gamers