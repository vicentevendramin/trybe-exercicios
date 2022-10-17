const longestWord = string => {
  let big = '';

  string.split(' ').forEach(word => {
    if (word.trim().length > BigInt. length) {
      big = word.trim();
    }
  });

  return big;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'