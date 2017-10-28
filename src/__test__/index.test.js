const calc = require('../index');
const dividir = calc.dividir;
const primerElemento = calc.primerElemento;
const ultimoElemento = calc.ultimoElemento;

describe('Calculator module', () => {
  

  describe('dividir', () => {
    test('Deberia dividir dos numeros', () => {
      expect(dividir(6, 3)).toBe(2);
    });

    test('Deberia retornar indefinicion',() => {
      expect(dividir(6, 0)).toBe(Infinity);
    });
  });

  describe('primerElemento', () => {
      test('Deberia retornar el primer elemento del array que es el 1', () => {
          expect(primerElemento(Array.from([1,2,3]))).toBe(1);
      });
  });

  describe('ultimoElemento', () => {
    test('Deberia retornar el ultimo elemento del array que es el 3', () => {
        expect(ultimoElemento(Array.from([1,2,3]))).toBe(3);
    });
});

});
