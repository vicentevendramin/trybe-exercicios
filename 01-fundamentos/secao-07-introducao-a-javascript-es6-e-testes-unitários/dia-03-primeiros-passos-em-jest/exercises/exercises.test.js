const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require('./exercises.js');

// Exercise 1
describe('Exercise 1', () => {
  it('Retorno de sum(4, 5) é 9', () => expect(9).toEqual(sum(4, 5)));
  it('Retorno de sum(0, 0) é 0', () => expect(0).toEqual(sum(0, 0)));
  // it('Retorno de sum(4, "5") é 9', () => expect(9).toEqual(sum(4, "5")));
});

// Exercise 2
describe('Exercise 2', () => {
  it('Retorno de myRemove([1, 2, 3, 4], 3) é [1, 2, 4]', () => expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3)));
  it('Retorno de myRemove([1, 2, 3, 4], 3) não é [1, 2, 3, 4]', () => expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3)));
  it('Retorno de myRemove([1, 2, 3, 4], 5) é [1, 2, 3, 4]', () => expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5)));
});

// Exercise 3
describe('Exercise 3', () => {
  it('Retorno de myFizzBuzz(15) é fizzbuzz', () => expect('fizzbuzz').toEqual(myFizzBuzz(15)));
  it('Retorno de myFizzBuzz(3) é fizz', () => expect('fizz').toEqual(myFizzBuzz(3)));
  it('Retorno de myFizzBuzz(5) é buzz', () => expect('buzz').toEqual(myFizzBuzz(5)));
  it('Retorno de myFizzBuzz(7) é 7', () => expect(7).toEqual(myFizzBuzz(7)));
  it('Retorno de myFizzBuzz("Trybe") é false', () => expect(false).toEqual(myFizzBuzz("Trybe")));
});

// Exercise 4
describe('Exercise 4', () => {
  it('Vogais "a, e, i, o, u" são convertidas em "1, 2, 3, 4 e 5"', () => expect('12345').toEqual(encode('aeiou')));
  it('Números "1, 2, 3, 4 e 5" são convertidas em "a, e, i, o, u"', () => expect('aeiou').toEqual(decode('12345')));
  it('Letas "a, b, e, i, j, o, u" são convertidas em "1, 2, 3, 4 e 5', () => expect('1b23j45').toEqual(encode('abeijou')));
});

// Exercise 5
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// Exercise 6
describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});