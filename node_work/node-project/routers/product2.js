// product2.js
const express = require('express');
const router = express.Router();
const mysql = require('../mysql/pool');

// 전체조회
router.get('/', (req, res) => {
  mysql
    .query('product', 'productList')
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// 단건조회
router.get('/:id', (req, res) => {
  mysql
    .query('product', 'productGet', { prodnum: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// 등록
router.post('/', (req, res) => {
  mysql
    .query('product', 'productInsert', req.body)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
  // for(let i = 0; i < req.body.length; i++){
  // }
});

// 수정
router.put('/:id', (req, res) => {
  mysql
    .query('product', 'productUpdate', [req.body, { prodnum: req.params.id }])
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// 삭제
router.delete('/:id', (req, res) => {
  mysql
    .query('product', 'productDelete', { prodnum: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

module.exports = router;
