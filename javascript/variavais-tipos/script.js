//Solução 1 para verificar se é um palindrome
function verificaPalindromo(string){
    //1º verifica ser a string existe
    if (!string) return; // se a string nao é verdadeira retorne(return sai da dunção)

    return string.split("").reverse().join("") === string;

}

console.log(verificaPalindromo("ovo"));


//Solução 2 para verificar se é um palindrome

function verificaPalindromo2(string){
    //1º verifica ser a string existe
    if (!string) return; // se a string nao é verdadeira retorne(return sai da dunção)

    for (let i = 0; i < string.length/2; i++) {
        if (string[i] !==string[string.length -1 -i]) {
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo2("abba"));