// 240725
const express = require('express');
const router = express.Router();
const mysql = require('../mysql/pool');

// 전체조회
router.get('/', (req, res) => {
  mysql
    .query('customer', 'customerList')
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

// 단건조회
router.get('/:id', (req, res) => {
  mysql
    .query('customer', 'customerGet', { id: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

// 등록
router.post('/', (req, res) => {
  res.send(req.body);
  mysql
    .query('customer', 'customerInsert', [req.body])
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
  // for(let i = 0; i < req.body.length; i++){
  // }
});

// 수정
router.put('/:id', (req, res) => {
  mysql
    .query('customer', 'customerUpdate', [req.body, { id: req.params.id }])
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

// 삭제
router.delete('/:id', (req, res) => {
  mysql
    .query('customer', 'customerDelete', { id: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

module.exports = router;
