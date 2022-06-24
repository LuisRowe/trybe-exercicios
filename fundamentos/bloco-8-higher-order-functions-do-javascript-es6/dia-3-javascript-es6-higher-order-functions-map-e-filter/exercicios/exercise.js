const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const formatedBookNames = (array) => array.map((elemento) => `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`);

// console.log(formatedBookNames(books)); volta nome em formato nomelivro - genero - nomeautor

const nameAndAge = (array) => {
  const autor = array.map((elemento) => { return { age: elemento.releaseYear - elemento.author.birthYear, author: elemento.author.name}});
  return autor.sort((a, b) => a.age - b.age);
}

// console.log(nameAndAge(books)); Ordena livros por idade do autor quando publicou

const fantasyOrScienceFiction = (array) => array.filter((elemento) => elemento.genre === 'Fantasia' || elemento.genre === 'Ficção Científica');

// console.log(fantasyOrScienceFiction(books)); volta livros de fantasia e ficção cientifica

const oldBooksOrdered = (array) => array.filter((elemento) => elemento.releaseYear < 2022 - 60).sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldBooksOrdered(books)); Livros com mais de 60 anos, em ordem do mais velho para mais novo.

const fantasyOrScienceFictionAuthors = (array) => array.filter((elemento) => elemento.genre === 'Fantasia' || elemento.genre === 'Ficção Científica').map((elemento) => elemento.author.name).sort();

// console.log(fantasyOrScienceFictionAuthors(books)); Autores fantasia e ficção cientifica em ordem alfabética

const oldBooks = (array) => array.filter((elemento) => elemento.releaseYear < 2022 - 60).map((elemento) => elemento.name);

// console.log(oldBooks(books)); Nome dos livros com mais de 60 anos.

const authorWith3DotsOnName = (array)  => {
  const nomeAutores = array.map((element) => element.author.name);
  return nomeAutores.filter((elemento) => elemento[1] === '.' && elemento[4] === '.' && elemento[7] === '.');
}

// console.log(authorWith3DotsOnName(books)); Retorna autor com 3 nomes abreviados.