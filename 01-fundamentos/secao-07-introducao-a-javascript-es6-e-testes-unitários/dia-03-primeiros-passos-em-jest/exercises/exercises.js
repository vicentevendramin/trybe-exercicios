// Exercise 1
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// Exercise 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Exercise 3
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Exercise 4
const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });

  return caracters.join('');
}

// Exercise 5
const techList = (array, string) => {
  if (array.length === 0) return 'Vazio!';

  const sortedArray = array.sort();
  const list = [];

  for (let i = 0; i < sortedArray.length; i += 1) {
    list.push({
      tech: sortedArray[i],
      name: string
    });
  }

  return list;
}

// Exercise 6
const hydrate = (string) => {
  const splitedString = string.split('');
  let glasses = 0;

  for (let i = 0; i < splitedString.length; i += 1) {
    const numberInString = parseInt(splitedString[i]);

    if (numberInString) glasses += numberInString;
  }

  let glass = 'copo';

  if (glasses > 1) glass = 'copos';
  
  return `${glasses} ${glass} de água`;
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate };