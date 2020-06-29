const express = require('express');
      router  = express.router();
      
router.get('/', (req, res) => {
    res.send('Authorization Route');
});