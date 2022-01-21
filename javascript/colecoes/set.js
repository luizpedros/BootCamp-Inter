// dado o Array [30, 30, 40, 5, 223, 2049, 3034, 5] retorne outro array apenas com valores unicos
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array){
    const mySet = new Set(array);

    return [...mySet]; //"..." é o agurmento sprety, para cada elemento so set vai adicionar dentro desse array
    //OBS.: se eu quero que os elementos do set se torne so array, eu preciso usar o argumeto spraty para  
}

console.log(valoresUnicos(meuArray));
