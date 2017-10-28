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
