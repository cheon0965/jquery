// customer.js
const express = require('express');
const router = express.Router();
const mysql = require('../mysql/pool');

// 전체조회
router
  .get('/', (req, res) => {
    let page = req.query.page;
    if (!page) {
      page = 1;
    }
    let offset = (page - 1) * 10;

    mysql.query('board', 'boardList', offset).then((list) => {
      mysql.query('board', 'boardCount').then((total) => {
        res.send({ list, total: total[0] });
      });
    });
  })

  // 단건조회
  .get('/:no', (req, res) => {
    mysql.query('board', 'boardGet', { NO: req.params.no }).then((result) => {
      res.send(result);
    });
  })

  // 등록
  .post('/', async (req, res) => {
    let results = [];
    for (let i in req.body) {
      let result = await mysql.query('board', 'boardInsert', req.body[i]);
      results.push(result);
    }
    res.send(results);
  })

  // 수정
  .put('/:no', (req, res) => {
    mysql.query('board', 'boardUpdate', [req.body, { NO: req.params.no }]).then((result) => {
      res.send(result);
    });
  })

  // 삭제
  .delete('/:no', (req, res) => {
    mysql.query('board', 'boardDelete', { NO: req.params.no }).then((result) => {
      res.send(result);
    });
  });

module.exports = router;
