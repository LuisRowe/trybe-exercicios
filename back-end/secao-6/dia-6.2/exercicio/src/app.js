const bodyParser = require('body-parser');
const express = require('express');
const account = require('./controllers/accounts.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id', account.getById);

app.get('/accounts-v2/:id', account.getByIdV2);

app.get('/accounts/:id/comments', account.getCommentsById);

app.post('/accounts', account.createAccount);

module.exports = app;
