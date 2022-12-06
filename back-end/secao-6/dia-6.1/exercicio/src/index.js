const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

const Book = require('./controllers/book.controller');

app.get('/book', Book.getAll);

app.get('/book/author', Book.getByAuthor);

app.get('/book/:id', Book.getById);

app.post('/book', Book.createBook);

app.put('/book/:id', Book.updateBook);

app.delete('/book/:id', Book.deleteBook);