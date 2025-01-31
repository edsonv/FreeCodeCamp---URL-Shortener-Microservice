require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

dbConnection();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.use('/api', require('./routes/shorturl'));

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
