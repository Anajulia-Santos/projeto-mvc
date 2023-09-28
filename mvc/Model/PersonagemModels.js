class Personagens {

    nome
    poder
    genero
    tamanho
    profissao
    
    constructor(nome, poder, genero){
        this.nome = nome
        this.poder = poder
        this.genero = genero
    }
    pegarInformacoes(){
        return{
            "nome" : this.nome,
            "poder" : this.poder,
            "genero" : this.genero
    }
    }
}

module.exports = Personagens