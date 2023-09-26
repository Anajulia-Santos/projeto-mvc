const app = require('../../startup.js')
const Personagem = require('../Model/PersonagemModels.js')

app.get("/getAllPersons", (req,res) => {
    res.setHeader("Acess-Control-Allow-Origin" , "*")

    const pokemon = new Personagem ("Cihdfh", "fogo", "Maculijno")
    
    res.json(pokemon.pegarInformacoes())
})