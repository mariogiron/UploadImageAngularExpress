const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/productosDB';

const config = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(mongoDB, config);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));