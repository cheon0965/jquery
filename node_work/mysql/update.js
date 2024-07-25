//select.js
const express = require('express');
const app = express();
const port = 3000;

//mysql
const pool = require('./pool.js');

// 쿼리실행
const id = 6;
const email = 'c@c.com';
const address = '대구';

// let sql = `update customer set email = '${email}',
//                                address = '${address}'
//            where id = ${id}`;
// let result;
// connection.query(sql, function (err, results, fields) {
//   if (err) {
//     console.log(err);
//   }
//   result = results;
//   console.log(results);
// });

//
pool.getConnection((err, connect) => {
  let sql = `update customer set ? where ?`;
  let result;
  connect.query(sql, [{ email, address }, { id }], function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    result = results;
    console.log(results);
  });

  connect.release();
});

app.get('/', (req, res) => {
  res.send(result);
});

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
