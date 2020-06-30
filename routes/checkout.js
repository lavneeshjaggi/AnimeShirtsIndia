const express = require('express'),
      router  = express.Router();

router.get('/', function(req, res) {
    res.send('Checkout Route');
});

module.exports = router;