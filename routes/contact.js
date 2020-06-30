const express = require('express'),
      router  = express.Router();

router.get('/', function(req, res) {
    res.send('Contact Route');
});

module.exports = router;