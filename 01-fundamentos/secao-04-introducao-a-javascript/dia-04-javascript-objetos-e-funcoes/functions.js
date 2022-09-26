function checksPalindrome(word) {
  if (word.split("").reverse().join("") === word) {
    return true;
  } else {
    return false;
  }
}

function higherValue(array) {
  let numberIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > numberIndex) {
      numberIndex = index;
    }
  }
  console.log(numberIndex);
}

function lowerValue(array) {
  let numberIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < numberIndex) {
      numberIndex = index;
    }
  }
  console.log(numberIndex);
}

function biggestName(array) {
  let name = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > name.length) {
      name = array[index];
    }
  }
  console.log(name);
}

function moreRepeated(array) {
  let contRepeated = 0;
  let contNum = 0;
  let indexNumRepeated = 0;

  for (let index in array) {
    let verifyNum = array[index];
    for (let index2 in array) {
      if (verifyNum === array[index2]) {
        contNum += 1;
      }
    }
    if (contNum > contRepeated) {
      contRepeated = contNum;
      indexNumRepeated = index;
    }
    contNum = 0;
  }

  console.log(array[indexNumRepeated]);
}

function summation(n) {
  let total = 0;

  for (let num = 0; num <= n; num +=1) {
    total += num;
  }

  console.log(total);
}

function wordEnding(word, ending) {
  let verify = true;

  for (let index = 0; index < ending.length; index +=1) {
    if (word[word.length - ending.length + index] != ending[index]) {
      verify = false;
    }
  }

  console.log(verify);
}

console.log(checksPalindrome("arara"));
console.log(checksPalindrome("desenvolvimento"));

higherValue([2, 3, 6, 7, 10, 1]);

lowerValue([2, 4, 6, 7, 10, 0, -3]);

biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

moreRepeated([2, 3, 2, 5, 8, 2, 3]);

summation(5);

wordEnding('trybe', 'be');
wordEnding('joaofernando', 'fernan');