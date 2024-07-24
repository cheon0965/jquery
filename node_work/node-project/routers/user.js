// user.js
const express = require('express');
const router = express.Router();

router
  // 전체조회
  .get('/', (req, res) => {
    const page = req.query.page;
    const search = req.query.search;

    const data = req.query; // VO 객체
    const email = req.session.email;

    // 쿠키값 읽기
    console.log(req.cookies);
    // 쿠키 저장
    res.cookie('username', email, { expires: new Date(Date.now() + 15000) });

    res.send(`user query: ${page}, ${search}, email: ${email}`);
  })
  .get('/:username', (req, res) => {
    const username = req.params.username;
    res.send(username);
  })

  .post('/', (req, res) => {
    const username = req.body.username;
    const addr = req.body.addr;
    res.send(`post body ${username}, ${addr}`);
  })

  .put('/:userid', (req, res) => {
    const userid = req.params.userid;
    const deta = req.body;
    const result = { ...deta, userid };
    res.send(result);
  })
  .delete('/:userid', (req, res) => {
    const userid = req.params.userid;
    res.send(`delete: ${userid}`);
  });

module.exports = router;
