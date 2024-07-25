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
const id = 5;

// let sql = `delete from customer where id = ${id}`;
// let result;
// connection.query(sql, function (err, results, fields) {
//   if (err) {
//     console.log(err);
//   }
//   result = results;
//   console.log(results);
// });

let sql = `delete from customer where ?`;
let result;
connection.query(sql, { id }, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  result = results;
  console.log(results);
});

connection.end();

app.get('/', (req, res) => {
  res.send(result);
});

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
