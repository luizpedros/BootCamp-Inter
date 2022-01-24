//1ª Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele.

const maca = {
value: 2,

}
const laranja = {
value: 3,

}

function mapComThis(array, thisArg){
    return array.map(function(item){//função de callback
      return  item * this.value;
    }, thisArg); 
}

const nums = [1, 2]; //array

console.log('this -> maça ' + mapComThis(nums, maca));
console.log('this -> laranja ' + mapComThis(nums, laranja));