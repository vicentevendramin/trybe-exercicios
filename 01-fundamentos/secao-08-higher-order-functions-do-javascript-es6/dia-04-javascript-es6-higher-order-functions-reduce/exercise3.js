const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
function containsA(names) {
  let total = 0;

  names.forEach((name) => {
    const letters = name.split('');
    total += letters.reduce((acc, curr) => curr.toLowerCase() === 'a' ? acc += 1 : acc, 0);
  });

  return total;
}

console.log(containsA(names));