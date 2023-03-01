const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'final_product'
});

module.exports = pool.promise();