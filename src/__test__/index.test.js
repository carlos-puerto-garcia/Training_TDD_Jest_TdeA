const calc = require('../index');

describe('Calculator module', () => {


    it('Raíz cúbica de un número', () => {
        expect(calc.raizN(27, 3)).toBe(3);
    });

    it('Ordenar alfabéticamente una lista', () => {
        var list = ['PHP', 'JAVA', "C#", "Ruby", "AngularJS"];
        expect(calc.orderAlfList(list)).toEqual(["AngularJS", "C#", "JAVA", "PHP", "Ruby"]);
    });

});