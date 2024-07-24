// user.js
const express = require('express');
const router = express.Router();

router
  .get('/', (req, res) => {
    const page = req.query.page;
    const search = req.query.search;

    const data = req.query; // VO 객체
    console.log(data);
    res.send(`user query: ${page}, ${search}`);
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
