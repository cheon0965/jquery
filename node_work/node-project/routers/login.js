// login.js

const express = require('express');
const router = express.Router();

// login
router
  .get('/login', (req, res) => {
    const { email, pw } = req.query;
    req.session.email = email;
    console.log(email);
    req.session.is_logined = true;
    req.session.save((err) => {
      if (err) throw err;
      else res.redirect('/member');
    });
  })
  // logout
  .get('/logout', (req, res) => {
    const deta = req.query;
    res.send(`로그아웃`);
  });

module.exports = router;
