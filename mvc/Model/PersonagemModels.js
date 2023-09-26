class Personagens {

    anoDeCriacao
    nome
    jogodeOrigem
    
    constructor(anoDeCriacao, nome, jogodeOrigem){
        this.anoDeCriacao = anoDeCriacao
        this.nome = nome
        this.jogodeOrigem = jogodeOrigem
    }
    pegarInformacoes(){
        return{
            "anoDeCriacao" : this.anoDeCriacao,
            "nome" : this.nome,
            "jogodeOrigem" : this.jogodeOrigem
    }
    }
}
let mario = new Personagens("1983", "Mario", "MarioBros")
console.log(mario.anoDeCriacao+" "+mario.jogodeOrigem+" "+mario.nome)
module.exports = Personagens