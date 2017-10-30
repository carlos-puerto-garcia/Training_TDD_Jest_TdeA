const calc = require('../index');
const multiplicar = calc.multiplicar;
const multiplos = calc.multiplos;

describe('Calculator module', () => {
  describe('add', () => {
    
    describe('multiplicar', () => {
		it('DEBERIA MULTIPLICAR DOS NUMEROS', () =>{
			expect(multiplicar(4,3)).toBe(12);

		});

	});

	describe('multiplos', () => {
     it('Deberia encontrar los multiplos de dos' , () =>{
       expect(multiplos([3,4,5])).toBe(4)
   		});
	
	});
});   
});
