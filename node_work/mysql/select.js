//select.js
const express = require('express');
const app = express();
const port = 3000;

//mysql
const mysql = require('mysql2');
const conn = { host: 'localhost', port: '3306', user: 'hr', password: 'hr', database: 'shop' };
let connection = mysql.createConnection(conn);

connection.connect((err) => {
  if (err) {
    console.log('error connection' + err.stack);
    return;
  }
});

// 쿼리실행
const name = 'ㅎㄷㄷ';
const email = 'a@a.c';
const phone = '010-777-9999';

// sql = `insert into customer(name, email, phone) values( '${name}', '${email}', '${phone}')`;
// let result;
// connection.query(sql, function (err, results, fields) {
//     if (err) {
//         console.log(err);
//     }
//     result = results;
//     console.log(results.affectedRows, results.insertId);
// });

// preparest
// sql = `insert into customer(name, email, phone) values( ?, ?, ?)`;
sql = `insert into customer set ?`;
let result;
connection.query(sql, { name, email, phone }, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  result = results;
  console.log(results.affectedRows, results.insertId);
});

connection.end();

app.get('/', (req, res) => {
  res.send(result);
});

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
