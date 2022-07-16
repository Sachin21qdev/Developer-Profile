// import mongoose package
const mongoose = require('mongoose')

// declare a Database string URI
const password = 'sachin';
const DB_URI = `mongodb+srv://Sachin:${password}@cluster0.jz95i.mongodb.net/testDB?retryWrites=true&w=majority`;

// establishing a database connection
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

// export the connection object
module.exports = connection