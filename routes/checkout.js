const express = require('express');
      passport = require('passport');

const router = express.Router();

const isLoggedIn = require('../middlewares/check-logged-in');

router.get('/', isLoggedIn, function(req, res) {
    res.send('Checkout Route');
});

module.exports = router;