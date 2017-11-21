

 function sum(a, b) {
  return a + b;
}

function combine(array_one, array_two) {
  return array_one.concat(array_two);
}

module.exports = { sum: sum, combine: combine };

function add(a, b) {
  return a+b;
}

function multiplicar(a,b){
	return b*a;
}

// Hamilton Renteria Moreno
function multi(a,b,c,d){
	return a*b*c*d;
}

function orderAlfList(list) {
  return list.sort();
}

// Fin Hamilton Renteria Moreno


function multiplos(valor)
 { //multiplos de dos
	var multiplos2;
    for(var i = 1; i < 100; i++) {
        if (valor[i]% 2 ==0 ) {
            multiplos2 = valor[i];
        }
    }
    return multiplos2;
  }
/**
 * Raiz enesima de un némero
 * @param int numero 
 * @param int exponente 
 */
function raizN(numero, exponente) {
    return Math.pow(numero, 1 / exponente);
}

function dividir(a, b) {
  return a/b;
}

function primerElemento(array){
  return array.shift();
}
function findMax(array) {
  var i;
  var max = 0;
  for(i = 0; i < array.length; i++) {
      if (array[i] > max) {
          max = array[i];
      }
  }
  return max;
}

function square(a, b) {
  return a * b;
}
/**
 * Ordenar alfabéticamente una lista.
 * @param array list 
 */
function orderAlfList(list) {
    return list.sort();
}

function ultimoElemento(array){
  return array.pop();
}

function mult3(valor)
{
  var hola=[];
  for (var a=0;a<valor.length;a++)
  {
    if (valor[a]% 3 == 0 )
    {
      hola.push(valor[a]);
    }
  }
  return hola;
}


module.exports = {
  dividir,
  primerElemento,
  ultimoElemento,
  findMax,
  square,
  raizN,
  orderAlfList,
  multiplicar,
  multiplos,
  add,
  sum,
  combine,
  mult3,
};
