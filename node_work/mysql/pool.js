//pool.js

const mysql = require('mysql2');
const { connect } = require('../node-project/routers/customer');
const conn = { host: 'localhost', port: '3306', user: 'hr', password: 'hr', database: 'shop', connectionLimit: 10 };
let pool = mysql.createPool(conn);

function query(sql, data) {
  return new Promise((resolve, reject) => {
    pool.query(sql, data, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { pool, query };
