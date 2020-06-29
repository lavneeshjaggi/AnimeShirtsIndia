const express     = require('express'),
      connectDB   = require('./config/db');   

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/checkout', require('./routes/checkout'));
app.use('/contact', require('./routes/contact'));
app.use('/shop', require('./routes/shop'));
app.use('/signin', require('./routes/sign-in-and-sign-up'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server Started!')
});