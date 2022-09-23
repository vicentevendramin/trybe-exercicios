let primeNumber = 0;

for (let index = 0; index <= 50; index += 1) {
  if (index % 2 != 0) {
    if (primeNumber < index) {
      primeNumber = index;
    }
  }
}

console.log("Biggest prime number = " + primeNumber);