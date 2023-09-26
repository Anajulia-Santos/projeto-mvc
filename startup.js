const express = require('express')

const app = express()

app.listen(3000, () => console.log("Online Server at port 3000"))
module.exports = app

// const studentController = require('./mvc/Controller/studentsController')
// const escolaControllers = require('./mvc/Controller/schoolController')
// const personsController = require('../mvc/mvc/Controller/personController')
const attractionController = require("../mvc/mvc/Controller/AttractionsController")
