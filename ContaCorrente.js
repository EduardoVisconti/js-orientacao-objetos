import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; //Sempre que criar uma nova conta, não seria criado um novo total, mantendo o valor correto.
    agencia;
    _cliente;
     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;


    set cliente(novoValor){
        if (novoValor instanceof Cliente){ //Se for um cliente, você deixa fazer a alteração.
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo (){
        return this.saldo;
    }

    constructor (agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}