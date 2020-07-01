const express = require('express'),
      router  = express.Router(),
      passport = require('passport');

router.get('/', function(req, res) {
    res.send('Sign In Route');
});

module.exports = router;