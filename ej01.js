/*Escribir una función que dado un 
número X (base) 
y un número N (potencia), 
devuelva el resultado de realizar XN

var numero=0;//var global

function potencia(base,exponente){
	var resultado =0;//var.local
	console.log(numero); //0
}

//console.log(resultado);//undefined
*/

function potencia(base, exponente){
	var resultado =1;
	//0<0? NO>NO ENTRA->MUESTRO RESULTADO=1;
	for(i=0; i<exponente;i++){
		resultado=resultado*base;
	}
	return resultado;
}

var operacion = potencia(2,5);
console.log(operacion);

console.log(resultado); //resultado is
//not defined





