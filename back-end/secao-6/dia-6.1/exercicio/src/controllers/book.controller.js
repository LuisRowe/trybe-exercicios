const BookService = require('../services/books.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
  
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    res.status(500).json({ message: error500Message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createBook(title, author, pageQuantity);

    return res.status(201).json(newBook);
  } catch (e) {
    res.status(500).json({ message: error500Message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const updatedBook = await BookService.updateBook(id, title, author, pageQuantity);

    if (!updatedBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });    
  } catch (e) {
    res.status(500).json({ message: error500Message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookDeleted = await BookService.deleteBook(id);

    if (!bookDeleted) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (e) {
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
