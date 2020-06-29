const mongoose = require('mongoose'),
      config   = require('config'),
      db       = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Dtatabase Connected!');
    } catch(error) {
        console.log(error.message);

        // Exit
        process.exit(1);
    }
};

module.exports = connectDB;