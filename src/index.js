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

}

function ultimoElemento(array){
  return array.pop();
}


module.exports = {
  dividir,
  primerElemento,
  ultimoElemento,
   findMax,
   square,
    raizN,
    orderAlfList
};
