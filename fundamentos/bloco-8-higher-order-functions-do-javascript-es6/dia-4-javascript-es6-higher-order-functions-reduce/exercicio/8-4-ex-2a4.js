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

// string com os nomes dos autores

const expectedResultReduceNames = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft."; 

function reduceNames(livros) {
  let autor = livros.reduce((acc, livro) => acc.concat(livro.author.name), []);
  let string = autor.join(', '); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  string += '.' // ponto final
  return string;
}

console.log(reduceNames(books))
console.log(reduceNames(books) === expectedResultReduceNames);

// média idade dos authores quando lançaram os livros;

const expectedResultAverageAge = 43;

function averageAge(livros) {
  // escreva seu código aqui
  const idadeTotal = livros.map((livro) => livro.releaseYear - livro.author.birthYear);
  const numeroAutores = idadeTotal.length;
  return idadeTotal.reduce((acc, idades) => acc + idades, 0) / numeroAutores;
}

console.log(averageAge(books))
console.log(averageAge(books) === expectedResultAverageAge);

// encontrar livro com maior nome

const expectedResultLongestNamedBook = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook(livros) {
  return livros.reduce((acc, curr) => (acc.name.length > curr.name.length) ? acc : curr);
}

console.log(longestNamedBook(books))
console.log(JSON.stringify(longestNamedBook(books)) === JSON.stringify(expectedResultLongestNamedBook));
