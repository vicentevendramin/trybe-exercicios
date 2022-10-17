const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (a, b) => (a - b);

const sorted = oddsAndEvens.sort(sortOddsAndEvens);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉