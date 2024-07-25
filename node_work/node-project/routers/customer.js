// customer.js
const express = require('express');
const router = express.Router();

//mysql
const mysql = require('mysql2');
const conn = { host: 'localhost', port: '3306', user: 'hr', password: 'hr', database: 'shop' };

// 전체조회
router
  .get('/', (req, res) => {
    let connection = mysql.createConnection(conn);
    sql = `select * from  customer`;
    connection.query(sql, function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      res.send(results);
    });
    connection.end();
  })

  // 단건조회
  .get('/:id', (req, res) => {
    let connection = mysql.createConnection(conn);
    sql = `select * from  customer where ?`;
    connection.query(sql, { id: req.params.id }, function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      res.send(results);
    });
    connection.end();
  })

  // 등록
  .post('/', (req, res) => {
    let connection = mysql.createConnection(conn);
    sql = `insert into customer set ?`;
    let ss = [];
    for (let i in req.body) {
      connection.query(sql, req.body[i], function (err, results, fields) {
        if (err) {
          console.log(err);
        }
        ss.push(results);
      });
    }
    res.send(ss);
    connection.end();
  })

  // 수정
  .put('/:id', (req, res) => {
    let connection = mysql.createConnection(conn);
    let sql = `update customer set ? where ?`;
    connection.query(sql, [req.body, { id: req.params.id }], function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      res.send(results);
    });
    connection.end();
  })

  // 삭제
  .delete('/:id', (req, res) => {
    let connection = mysql.createConnection(conn);
    let sql = `delete from customer where ?`;
    connection.query(sql, { id: req.params.id }, function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      res.send(results);
    });

    connection.end();
  });

module.exports = router;
