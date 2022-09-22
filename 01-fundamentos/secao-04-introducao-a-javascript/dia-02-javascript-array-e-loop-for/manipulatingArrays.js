let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersSum = 0;
let higherValue = null;
let lowerValue = Infinity;
let oddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  numbersSum = numbers[index] + numbersSum;

  if (numbers[index] > higherValue) {
    higherValue = numbers[index];
  }

  if (numbers[index] < lowerValue) {
    lowerValue = numbers[index];
  }

  if (numbers[index] % 2 != 0) {
    oddNumbers += 1;
  } else if (oddNumbers === 0) {
    oddNumbers = 'no odd value';
  }
}

let arithmeticMean = numbersSum / numbers.length;

console.log('Numbers: ' + numbers);
console.log('Sum of numbers: ' + numbersSum);
console.log('Arithmetic mean: ' + arithmeticMean);

if (arithmeticMean > 20) {
  console.log('Value greater than 20');
} else {
  console.log('Value less than or equal to 20');
}

console.log('Higher value: ' + higherValue);
console.log('Lower value: ' + lowerValue);
console.log('Odd numbers: ' + oddNumbers);

let array = [];

for (let index = 1; index <= 25; index += 1) {
  array.push(index);
}

console.log(array);

for (let index = 0; index < array.length; index += 1) {
  console.log(array[index] / 2);
}