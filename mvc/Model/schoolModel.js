const school = {
    Endereco: "",
    Nome:"",
    Professores:"",
    Diretor:"",
    Telefone:"",
    CNPJ: "",
    RegistroJSON: function(){
        return{
            "end":this.end,
            "nome":this.nome,
            "diretor":this.diretor,
            "tel":this.tel,
            "cnpj":this.cnpj
        }
    }
}
module.exports = school