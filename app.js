const express     = require('express'),
      connectDB   = require('./config/db');   

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/checkout', require('./routes/checkout'));
app.use('/contact', require('./routes/contact'));
app.use('/shop', require('./routes/shop'));
app.use('/signin', require('./routes/sign-in-and-sign-up'));
app.use('/register', require('./routes/user-registeration'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server Started!')
});