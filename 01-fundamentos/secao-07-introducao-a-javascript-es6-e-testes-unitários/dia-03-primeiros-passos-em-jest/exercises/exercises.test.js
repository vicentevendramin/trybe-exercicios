const { sum, myRemove } = require('./exercises.js');

describe('Exercise 1', () => {
  it('Retorno de sum(4, 5) é 9', () => expect(9).toEqual(sum(4, 5)));
  it('Retorno de sum(0, 0) é 0', () => expect(0).toEqual(sum(0, 0)));
  it('Retorno de sum(4, "5") é 9', () => expect(9).toEqual(sum(4, "5")));
});