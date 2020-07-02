const express  = require('express'),
      passport = require('passport');

const router = express.Router();

const User = require('../../models/user');

router.post('/', function(req, res) {
    const { email, password } = req.body;

    User.register(new User({
        username: email,
        email: email
    }), password, function(error, user) {
        if (error) {
            console.log(error.message);

            return res.status(500).json({ msg: "Server Error"});
        }
        
        passport.authenticate('local')(req, res, function() {
            res.send('Registeration Complete');
        });
    });
});

module.exports = router;