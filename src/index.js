/**
 * Raiz enesima de un némero
 * @param int numero 
 * @param int exponente 
 */

function raizN(numero, exponente) {
    return Math.pow(numero, 1 / exponente);
}

/**
 * Ordenar alfabéticamente una lista.
 * @param array list 
 */
function orderAlfList(list) {
    return list.sort();
}




module.exports = {

    raizN,
    orderAlfList,


};