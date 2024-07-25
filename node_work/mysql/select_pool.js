//select_pool.js.js
const express = require('express');
const app = express();
const port = 3000;

//mysql
const mysql = require('mysql2');
const { connect } = require('../node-project/routers/customer');
const conn = { host: 'localhost', port: '3306', user: 'hr', password: 'hr', database: 'shop', connectionLimit: 10 };
let pool = mysql.createPool(conn);

pool.getConnection((err, connect) => {
  let sql = `select * from  customer`;
  let result;
  connect.query(sql, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    result = results;
    console.log(results);
  });
  // connect 종료
  connect.release();
});
