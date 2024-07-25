//select_pool.js.js
const mysql = require('./pool.js');
let sql = `select * from  customer`;

// pool.getConnection((err, connect) => {
//   let result;
//   connect.query(sql, function (err, results, fields) {
//     if (err) {
//       console.log(err);
//     }
//     result = results;
//     console.log(results);
//   });
//   // connect 종료
//   connect.release();
// });

mysql
  .query(sql)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
