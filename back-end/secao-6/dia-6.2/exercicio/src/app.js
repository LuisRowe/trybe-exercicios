const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id', account.getById);

module.exports = app;
