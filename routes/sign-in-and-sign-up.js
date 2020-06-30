const express = require('express'),
      router  = express.Router();

router.get('/', function(req, res) {
    res.send('Sign In And Sign Up Route');
});

module.exports = router;