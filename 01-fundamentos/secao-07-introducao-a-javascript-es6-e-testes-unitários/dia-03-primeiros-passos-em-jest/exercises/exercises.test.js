const { sum, myRemove } = require('./exercises.js');

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