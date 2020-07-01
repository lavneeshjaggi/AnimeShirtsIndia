const express  = require('express'),
      passport = require('passport');

const router = express.Router();

router.post(
    '/', 
    passport.authenticate(
        'local',
        {
            successRedirect: '/checkout',
            failureRedirect: '/',
            failureMessage: true
        } 
    ), 
    function(req, res) { 
});

module.exports = router;