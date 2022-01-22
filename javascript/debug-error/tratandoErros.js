//O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.
//1º Crie uma função que recebe um array e um número
function validaArray(array, num){
    //Utilize a declaração try...catch
    try {
        //Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
        if(!array && !num) throw new ReferenceError("Envie os parêmetros");
        
        //Se o array não for do tipo 'object', lance um erro do tipo TypeError
        if(typeof array !== 'object') throw new TypeError("O Array precisa ser do tipo OBJECT");

        //Se o número não for do tipo 'number', lance um erro do tipo TypeError
        if(typeof num !== 'number') throw new TypeError("O Array precisa ser do tipo Number");

        //Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
        if(array.lenght !== num) throw new RangeError("Tamanho invalido!") 
    
        return array;
      //Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof  
    } catch (e) {
        if (e instanceof ReferenceError) {
			console.log('Este erro é um ReferenceError!');
			console.log(e.message);
		} else if (e instanceof TypeError) {
			console.log('Este erro é um TypeError!');
			console.log(e.message);
		}else if (e instanceof RangeError){
            console.log('Este erro é um RangeErrorr!');
			console.log(e.message);
        }else {
			console.log('Outro tipo de erro não espersdo: ' + e);
			
		}   
    }
}

console.log(validaArray([1],5));