//vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

//1º Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class ContaBancaria {
    constructor(agencia,numero, valor, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.valor = valor;
        this.tipo = tipo;
        this._saldo = saldo;
    }
    //OBS.:sempre que um valor for ter um get e um set, coloca-se um underline "_" na frente pra que a gente possa utilizar o nome no get e no set
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
    this._saldo = valor;
    }
}