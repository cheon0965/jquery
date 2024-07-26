// customer.js
const express = require('express');
const router = express.Router();
const mysql = require('../mysql/pool');

// 전체조회
router
  .get('/', (req, res) => {
    mysql.query('board', 'boardList').then((result) => {
      res.send(result);
    });
  })

  // 단건조회
  .get('/:id', (req, res) => {
    mysql.query('board', 'boardGet', { board_id: req.params.id }).then((result) => {
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
  .put('/:id', (req, res) => {
    mysql.query('board', 'boardUpdate', [req.body, { board_id: req.params.id }]).then((result) => {
      res.send(result);
    });
  })

  // 삭제
  .delete('/:id', (req, res) => {
    mysql.query('board', 'boardDelete', { board_id: req.params.id }).then((result) => {
      res.send(result);
    });
  });

module.exports = router;
