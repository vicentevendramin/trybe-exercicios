const checkNumber = (number, result) => number === result;

const drawr = (number, callback) => {
  const result = Math.floor(Math.random() * (5 - 1) + 1);

  return callback(number, result) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(drawr(4, checkNumber));