const substituaX = name => {
  const phrase = 'Tryber x aqui!';
  const result = phrase.replace('x', name);

  return result;
}

const minhasSkills = resultX => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  return `${resultX}
  Minhas três principais habilidades são:
  - ${skills[0]}
  - ${skills[1]}
  - ${skills[2]}`
}

const resultX = substituaX('Vicente');

console.log(minhasSkills(resultX));