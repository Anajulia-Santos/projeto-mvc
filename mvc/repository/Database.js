var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbmvc'
});
function SelectPersonagem() {
    connection.connect();

    connection.query('SELECT PER_NOME FROM PERSONAGENS', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].PER_NOME);
    });

    connection.end();
}

