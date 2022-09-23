let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log('Biggest word = ' + biggestWord);
console.log('Smallest word = ' + smallestWord);