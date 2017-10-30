const calc = require('../index');
const square = calc.square;
const findMax = calc.findMax;

describe('Calculator module', () => {
  
  describe('square', () => {
		it('Deberia multipicar dos númers' , () =>{
			expect(square(7, 3)).toBe(21);
		
		});
  
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

