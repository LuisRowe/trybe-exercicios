const express = require('express');
const {readFile, writeFile, editMovie, deleteMovie} = require('./movieReadAndEdit');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
  const movies = await readFile();
  return res.status(200).json(movies);
})

app.get('/movies/search', async (req, res) => {
  const {q} = req.query;
  const movies = await readFile();
  const movieFiltered = movies.filter(({movie}) => movie.includes(q))
  return res.status(200).json(movieFiltered);
})

app.get('/movies/:id', async (req, res) => {
  const {id} = req.params;
  const movies = await readFile();
  const movieFiltered = movies.find((movie) => movie.id === Number(id))
  if (!movieFiltered) {res.status(404).json({message: "Filme não encontrado"})}
  return res.status(200).json(movieFiltered);
})

app.post('/movies', async (req, res) => {
  const newMovie = req.body;
  if (typeof newMovie.price !== 'number') {return res.status(400).json({message: "O preço precisa ser um número"})}
  if (typeof newMovie.movie !== 'string') {return res.status(400).json({message: "Movie precisa ser um texto"})}
  if (newMovie.price < 0) {return res.status(400).json({message: "O preço precisa ser maior que zero"})}
  if (newMovie.movie.length === 0) {return res.status(400).json({message: "Movie precisa ser preenchido"})}
  const newMovieWithId = await writeFile(newMovie)
  return res.status(201).json(newMovieWithId);
})

app.put('/movies/:id', async (req, res) => {
  const newMovie = req.body;
  const {id} = req.params;
  if (typeof newMovie.price !== 'number') {return res.status(400).json({message: "O preço precisa ser um número"})}
  if (typeof newMovie.movie !== 'string') {return res.status(400).json({message: "Movie precisa ser um texto"})}
  if (newMovie.price < 0) {return res.status(400).json({message: "O preço precisa ser maior que zero"})}
  if (newMovie.movie.length === 0) {return res.status(400).json({message: "Movie precisa ser preenchido"})}
  const newMovieWithId = await editMovie(id, newMovie)
  return res.status(201).json(newMovieWithId);
})

app.delete('/movies/:id', async (req, res) => {
  const {id} = req.params;
  const deleteFunc = await deleteMovie(id)
  if (!deleteFunc) {res.status(404).json({message: "Id não encontrado"})}
  return res.status(204).end();
})

module.exports = app;