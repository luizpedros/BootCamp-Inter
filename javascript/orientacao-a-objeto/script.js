//vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

//1º Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
 //2º Dentro de ContaBancaria, construa o getter e o setter de saldo.
    //OBS.:sempre que um valor for ter um get e um set, coloca-se um underline "_" na frente pra que a gente possa utilizar o nome no get e no set
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
    this._saldo = valor;
    }

 //3º Dentro de ContaBancaria, crie os métodos sacar e depositar;

    sacar(){
        if(valor > ths._saldo) {
            return "Saldo insuficiente!"  
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    deposita(){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

//4º Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito.
class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero, cartaoCredito){
        //"super" vai retornar tudo que recebeu para a class pai "ContaBancari"
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoCredito =  cartaoCredito; 

    }
    //6º Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito    
    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
    //"super" vai retornar tudo que recebeu para a class pai "ContaBancari"
    super(agencia, numero);
    this.tipo = 'Poupança';

    }
}
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
    //"super" vai retornar tudo que recebeu para a class pai "ContaBancari"
    super(agencia, numero);
    this.tipo = 'Universitária';

    }
    //Aqui vou sobre escrever o método sacar, para a conta universitaria poder sacar ate 500.
    sacar(valor){
    if (valor > 500) {
        return "Operação negada";
    }
    this._saldo = this._saldo - valor;
    }

}

