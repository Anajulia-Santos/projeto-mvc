class LogAcesso {

    #id_log_acesso
    #ultimo_acesso
    #status_acesso
    #gamers_id_gamer

    constructor(id_log_acesso, ultimo_acesso, status_acesso, gamers_id_gamer) {
        this.#id_log_acesso = id_log_acesso
        this.#ultimo_acesso = ultimo_acesso
        this.#status_acesso = status_acesso
        this.#gamers_id_gamer = gamers_id_gamer
    }

    get id_log_acesso() {
        return this.#id_log_acesso
    }

    set id_log_acesso(value) {
        this.#id_log_acesso = value
    }

    get ultimo_acesso() {
        return this.#ultimo_acesso
    }

    set ultimo_acesso(value) {
        this.#ultimo_acesso = value
    }

    get status_acesso() {
        return this.#status_acesso
    }

    set status_acesso(value) {
        this.#status_acesso = value
    }

    get gamers_id_gamer() {
        return this.#gamers_id_gamer
    }

    set gamers_id_gamer(value) {
        this.#gamers_id_gamer = value
    }

    toJson() {

        return {
            "id_log_acesso": this.#id_log_acesso,
            "ultimo_acesso": this.#ultimo_acesso,
            "status_acesso": this.#status_acesso,
            "gamers_id_gamer": this.#gamers_id_gamer
        }

    }

}

module.exports = LogAcesso