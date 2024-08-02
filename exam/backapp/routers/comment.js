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

    mysql.query('comment', 'commentList', offset).then((list) => {
      mysql.query('comment', 'commentCount').then((total) => {
        res.send({ list, total: total[0] });
      });
    });
  })

  // 단건조회
  .get('/:no', (req, res) => {
    mysql.query('comment', 'commentGet', { no: req.params.no }).then((result) => {
      res.send(result);
    });
  })

  // 등록
  .post('/', async (req, res) => {
    let results = [];
    for (let i in req.body) {
      let result = await mysql.query('comment', 'commentInsert', req.body[i]);
      results.push(result);
    }
    res.send(results);
  })

  // 수정
  .put('/:no', (req, res) => {
    mysql.query('comment', 'commentUpdate', [req.body, { no: req.params.no }]).then((result) => {
      res.send(result);
    });
  })

  // 삭제
  .delete('/:no', (req, res) => {
    mysql.query('comment', 'commentDelete', { no: req.params.no }).then((result) => {
      res.send(result);
    });
  });

module.exports = router;
