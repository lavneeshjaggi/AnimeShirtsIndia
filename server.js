const express = require('express');

const app = express();

const connectDB = require('./config/db');   

connectDB();

app.use(express.json({ extended: false }));

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.use('/checkout', require('./routes/checkout'));
app.use('/contact', require('./routes/contact'));
app.use('/shop', require('./routes/shop'));
app.use('/signin', require('./routes/sign-in-and-sign-up'));
app.use('/register', require('./routes/user-registeration'));

const port = process.env.PORT || 5000;

app.listen(port, error => {
    if (error) throw error;
    console.group('Server running on port ' + port);
}); 