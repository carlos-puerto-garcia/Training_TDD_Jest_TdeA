
function add() {}

function multiplicar(a,b){
	return b*a;
}

function multiplos(valor) { //multiplos de dos
	var multiplos2;
    for(var i = 1; i < 100; i++) {
        if (valor[i]% 2 ==0 ) {
            multiplos2 = valor[i];
        }
    }
    return multiplos2;
  }

module.exports = {
  
  add,
  multiplicar,
  multiplos,
  
};
