const express = require('express'),
      router  = express.Router();

router.get('/', function(req, res) {
    res.send('Shop Route');
});

module.exports = router;