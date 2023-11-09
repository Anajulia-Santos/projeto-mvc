// const { path } = require('express/lib/application.js')
// const AtractionDAO = require('../DAO/AtractionsDAO.js')

// module.exports = (app) => {

//     app.get("/getAllAtrativos", async (req, res) => {        
//         const atractionDAO = new AtractionDAO()

//         res.setHeader("Access-Control-Allow-Origin", "*")
//         //Retorna no formato Json
//         res.json(await atractionDAO.consultarTodos())        
//     })
//         // app.get("/atrativos", async (req, res) => {    
//         //     res.sendFile(path.resolve() )    
//         // })
//     app.post("/atrativos",  async (req, res) => {})

//         app.delete("/atrativos/:id" , async (req, res) => {
//             res.setHeader("Access-Control-Allow-Origin", "*")
//             const atractionDAO = new AtractionDAO
//             const status = await atractionDAO.apagar(req.params.id)

//             res.json(
//                 status
//             )
//         })
// }

const AtrativoDAO = require('../DAO/AtractionsDAO')
const path = require('path')

module.exports = (app) => {

    app.get("/atrativos", async (req, res) => {
        const atrativoDAO = new AtrativoDAO()

        //Resolve problemas de cors
        res.setHeader("Access-Control-Allow-Origin", "*")
        //Retorna no formato Json
        res.json(await atrativoDAO.consultarUm())
    })

    app.post("/atrativo", async (req, res) => {
        const atrativoDAO = new AtrativoDAO()

        const {
            id: id,
            nome: nome,
            lat: lat,
            long: long,
            desc: desc,
            imagem: image
        } = req.body


        //Resolve problemas de cors
        res.setHeader("Access-Control-Allow-Origin", "*")
        //Retorna no formato Json

        let status;

        if (!id) {
            status = await atrativoDAO.cadastrar(nome, image, lat, long, desc)
        }
        else {
            status = await atrativoDAO.atualizar(id, nome, image, lat, long, desc)
        }


        res.json({ status })
    })

    app.delete("/atrativo/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        const atrativoDAO = new AtrativoDAO()

        const status = await atrativoDAO.apagar(req.params.id)

        res.json({
            status
        })
    })

    app.put("/atrativo/:id", async (req, res) => {
        const AtrativoDAO = new AtrativoDAO()

        const {
            nome,
            lat,
            long,
            image,
            id
        } = req.body;

        if (id = req.params.id) {
            const r = await AtrativoDAO.atualizar(nome, lat, long, image, id)
            res.json({msg: ''})

        } else {
             
        }
    })
    app.get("/pagina/listatrativos", (req, res) => {
        res.sendFile(path.resolve('mvc/views/ctrldev/atrativos/listattractions.html'))
    })
    app.get("/pagina/alteratrativos/:id", async (req, res) => {

        const atrativo = new AtrativoDAO()
        const r = await atrativo.consultarUm(req.params.id)
        console.log(r)
        res.render('atrativos/alteratrativos.ejs', {req,res})
    })

    app.get("/pagina/addatrativos", (req, res) => {
        res.sendFile(path.resolve('mvc/views/ctrldev/atrativos/addattractions.html'))
    })

}










