// pool.js

const mysql = require('mysql2');
const conn = { host: 'localhost', port: '3306', user: 'hr', password: 'hr', database: 'shop', connectionLimit: 10 };
let pool = mysql.createPool(conn);
const board = require('./board_sql');
const sql = { board };

function query(pro, key, data) {
  return new Promise((resolve, reject) => {
    pool.query(sql[pro][key], data, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { pool, query };
