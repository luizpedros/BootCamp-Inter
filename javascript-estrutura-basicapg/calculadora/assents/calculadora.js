function calc() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - subtralção (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira(¨%)\n 6 - Potenciação(**)'));
    console.log(operacao);

    // verificando se a operação é válida
    if (!operacao ||  operacao >= 7) {
        alert('erro - operação inválida');
        calc();
    }else{
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o SEGUNDO valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parametros invalidos')
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function sub(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function mult(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divInt(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function postMessage(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }
        
            function novaOperacao(){
                let opcao = prompt ('Deseja fazer outra operalçao:\n 1 - Sim\n 2 - Não');
        
                if(opcao == 1){
                    calc();
                }else if (opcao == 2){
                    alert('Até mais');
                }else{
                    alert('Digite uma opção valida')
                    novaOperacao();
                }
            }
        }
    
        /*if(operacao==1){
            soma();
        }else if (operacao==2) {
            sub();
        }else if (operacao==3){
            mult();
        }else if (operacao==4){
            divReal();
        }else if (operacao==5){
            divInt();
        }else if (operacao==6){
            postMessage();
        }*/

        //Com Switch case
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }

   

}
calc();
