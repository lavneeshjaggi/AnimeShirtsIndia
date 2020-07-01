const express = require('express'),
      bcrypt  = require('bcryptjs'); 

const { body, validationResult } = require('express-validator');

const router  = express.Router();

const User = require('../models/user');

router.post(
    '/', 
    [
        body('name', 'Name is required').not().isEmpty(),
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'Please enter a password with 6 or more characters').isLength({ min : 6})
    ], 
    async function(req, res) {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ errors: [ { msg: 'User already exists' } ]});
            }

            user = new User({
                name,
                email,
                password
            });
    
            const salt = await bcrypt.genSaltSync(10);
    
            user.password = await bcrypt.hashSync(password, salt);
    
            await user.save();
    
            res.send('User registered');
        } catch(error) {
            console.log(error.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;