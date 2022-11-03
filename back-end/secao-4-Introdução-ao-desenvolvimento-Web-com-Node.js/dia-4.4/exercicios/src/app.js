const express = require('express');
const generateToken = require('./utils/generateToken');
const validateCreatedAt = require('./middlewares/validateCratedAt');
const validateDescription = require('./middlewares/validateDescription');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateRating = require('./middlewares/validateRating');
const validateUser = require('./middlewares/validateUser');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post('/activities',
  auth,
  validateName, 
  validatePrice, 
  validateDescription, 
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', validateUser, (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
})

module.exports = app;