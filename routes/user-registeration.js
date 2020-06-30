const express = require('express');
      router  = express.Router();

router.get('/', (req, res) => {
    res.send('User Registeration Route');
});

module.exports = router;