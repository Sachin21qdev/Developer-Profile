const express = require('express');
var cors = require('cors');
let path = require('path');
const connection = require('./config/config')
const app = express();
const port = process.env.PORT || 3001;
const developers = require('./api/developers/backend');

app.use(express.json());
app.use(cors());
// Database config

connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))
app.use('/api/developers', developers);

app.use(express.static(path.join(__dirname, "/cient/build")));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});
