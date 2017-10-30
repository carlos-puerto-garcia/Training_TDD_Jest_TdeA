const calc = require('../index');
const dividir = calc.dividir;
const primerElemento = calc.primerElemento;
const ultimoElemento = calc.ultimoElemento;
const square = calc.square;
const findMax = calc.findMax;

describe('Calculator module', () => {
  
  describe('square', () => {
		it('Deberia multipicar dos númers' , () =>{
			expect(square(7, 3)).toBe(21);
		
		});
  
  });

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
  describe('findMax', ( ) => {
    it('debe encontrar el numero mayor del array' , () =>{
      expect(findMax([1,6,7])).toBe(7)

  });
});

});



    it('Raíz cúbica de un número', () => {
        expect(calc.raizN(27, 3)).toBe(3);
    });

    it('Ordenar alfabéticamente una lista', () => {
        var list = ['PHP', 'JAVA', "C#", "Ruby", "AngularJS"];
        expect(calc.orderAlfList(list)).toEqual(["AngularJS", "C#", "JAVA", "PHP", "Ruby"]);
    });

});

