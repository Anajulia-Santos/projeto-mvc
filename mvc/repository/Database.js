const res = require('express/lib/response')
var mysql = require('mysql2')

class databaseMysql {

    #connection

    constructor() {
        this.#connection = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'bdgp'
        }).promise();
    }

    async deleteAtrativos(id) {
        const sql = `delete from atrativos where id_atrativos =` + id

        const res = await this.#connection.execute(sql)
        return query[0]
    }

    async SelectSkin() {
        const query = await connection.query('select * from skin')
        return query[0]
    }
    async SelectPersonagem() {
        const query = await connection.query('select * from personagem')
        return query[0]
    }
    async SelectAtrativos() {
        const query = await connection.query('select * from atrativos')
        return query[0]
    }
    async SelectCoins() {
        const query = await connection.query('select * from coins')
        return query[0]
    }
    async SelectMissoes() {
        const query = await connection.query('select * from missoes')
        return query[0]
    }
}

// var connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'bdgp'
// }).promise();

// function SelectPersonagem() {
//     connection.connect();

//     connection.query('SELECT PER_NOME FROM PERSONAGENS', function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results[0].PER_NOME);
//     });

//     connection.end();
// }

// SelectPersonagem()

// function SelectItens() {
//     // Conexão ao banco de dados
//     connection.connect();

//     // Consulta dos bd
//     connection.query('SELECT * FROM item', (error, results, fields) => {
//         if (error) throw error;
//         console.log(results)
//     })
//     connection.end();
// }
// module.exports = {
//     SelectItens
// }



module.exports = databaseMysql
