// src/app.js
const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (req, res) => res.status(200).json({teams}));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.get('/teams/:id', (req, res) => {
  const {id} = req.params;
  const teamToShow = teams.find((team) => team.id === Number(id));
  if(!teamToShow) {res.status(404).json({message: 'Time não encontrado.'})}
  res.status(200).json({teamToShow});
})

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const teamToUpdate = teams.find((team) => team.id === Number(id));

  if (!teamToUpdate) {res.status(404).json({message: 'Time não encontrado.'})}

  teamToUpdate.name = name;
  teamToUpdate.initials = initials;

  res.status(200).json({teamToUpdate})
})

app.delete('/teams/:id', (req, res) => {
  const {id} = req.params;
  const arrayPosition = teams.findIndex((team) => team.id = Number(id));
  teams.splice(arrayPosition,1)
  res.status(200).end();
})

module.exports = app;