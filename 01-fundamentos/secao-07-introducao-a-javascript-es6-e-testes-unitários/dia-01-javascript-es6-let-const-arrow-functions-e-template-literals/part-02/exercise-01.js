const factorial = (number) => {
  let result = 1;
  let count = 1;

  while (count <= number) {
    result *= count;
    count += 1;
  }

  return result;
}

console.log(`Esse é o fatorial ${factorial(4)}`);