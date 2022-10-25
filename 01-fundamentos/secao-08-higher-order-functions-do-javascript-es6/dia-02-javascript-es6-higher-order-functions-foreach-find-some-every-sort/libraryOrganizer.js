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
// Exercise 01
function authorBornIn1947(books) {
  const person = books.find((book) => book.author.birthYear === 1947);

  return `O autor ${person.author.name} nasceu em 1947.`;
}

console.log(authorBornIn1947(books));

// Exercise 02
function smallerName(books) {
  let nameBook;

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });

  return `O menor nome de livro é "${nameBook}".`;
}

console.log(smallerName(books));

// Exercise 03
function getNamedBook(books) {
  return books.find((book) => book.name.length === 26);
}

console.log(getNamedBook(books));

// Exercise 04
function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => a.releaseYear > b.releaseYear ? -1 : 1);
}

booksOrderedByReleaseYearDesc();
console.log(books);

// Exercise 05
function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 2001);
}

console.log(everyoneWasBornOnSecXX());

// Exercise 06
function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());

// Exercise 07
function authorUnique() {
  return books.every((book) => {
    books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name));
  });
}

console.log(authorUnique());
