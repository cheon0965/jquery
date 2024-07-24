// product.js
const express = require('express');
const router = express.Router();

// restful 방식
router
  // category = t1 price = 2000
  .get('/', (req, res) => {
    const deta = req.query;
    res.send(`category: ${deta.category}, price: ${deta.price}`);
  })
  // 단건조회
  .get('/:product', (req, res) => {
    const product = req.params.product;
    res.send(`product: ${product}`);
  })
  // 등록 json string {id: , name:, price:}
  .post('/', (req, res) => {
    const data = req.body;
    res.send(`id: ${data.id}, name: ${data.name}, price: ${data.price}`);
  })
  // 수정
  .put('/:product', (req, res) => {
    const product = req.params.product;
    const data = req.body;
    res.send({ ...data, product });
  })
  // 삭제
  .delete('/:product', (req, res) => {
    const product = req.params.product;
    res.send(`삭제 product: ${product}`);
  });

module.exports = router;
