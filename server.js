const express               = require('express'),  
      session               = require('express-session'), 
      config                = require('config');
      bodyParser            = require('body-parser'),
      passport              = require('passport'),
      localStrategy         = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose');

const app = express();

const connectDB = require('./config/db'),
      User      = require('./models/user');    

connectDB();0

app.use(express.json({ extended: false }));
app.use(session({
    secret: config.get('secret'),
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.use('/checkout', require('./routes/checkout'));
app.use('/contact', require('./routes/contact'));
app.use('/shop', require('./routes/shop'));
app.use('/login', require('./routes/sign-in-sign-up-sign-out/sign-in'));
app.use('/register', require('./routes/sign-in-sign-up-sign-out/sign-up'));
app.use('/logout', require('./routes/sign-in-sign-up-sign-out/sign-out'));

const port = process.env.PORT || 5000;

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
}); 