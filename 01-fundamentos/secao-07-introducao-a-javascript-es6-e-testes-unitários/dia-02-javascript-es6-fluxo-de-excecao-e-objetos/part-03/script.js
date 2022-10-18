const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const turnoNoite = object => object.turno = 'noite';

const listarKeys = object => Object.keys(object);

const tamanhoObjeto = object => Object.keys(object).length;

const valoresObjeto = object => Object.values(object);

const allLessons = () => Object.assign({}, { lesson1, lesson2, lesson3 });

const numeroDeEstudantes = object => {
  let total = 0;

  const array = Object.keys(object);

  for (let index in array) {
    total += object[array[index]].numeroEstudantes;
  }

  return total;
}

const valorPosicao = (object, number) => Object.values(object)[number];

const verificaPar = (object, key, value) => {
  const array = Object.entries(object);
  let equal = false;

  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) equal = true;
  }

  return equal;
}

turnoNoite(lesson2);
console.log(lesson2);

console.log(listarKeys(lesson1));

console.log(tamanhoObjeto(lesson2));

console.log(valoresObjeto(lesson3));

console.log(allLessons());

console.log(numeroDeEstudantes(allLessons()));

console.log(valorPosicao(lesson1, 2));

console.log(verificaPar(lesson2, 'professor', 'Carlos'));