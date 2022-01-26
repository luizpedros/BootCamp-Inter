/*var arr = [6,6,6,6,];
var soma = 0;
for(var i = 0; i < arr.length; i++) {
    soma += arr[i];
}
console.log(soma-3);*/

 var numeros = [6, 6, 6, 6];
 var total = numeros.reduce(function(total, numero){
    return total + numero;
    }, 0);
 console.log(total);