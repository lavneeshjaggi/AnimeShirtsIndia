const express     = require('express'),
      connectDB   = require('./config/db');   

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server Started!')
});