class Cliente {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    consultarSaldo() {
        console.log(`== SALDO ATUAL ==\n U$ ${this.saldo}\n`);
    }
}

const david = new Cliente("David", 150.18);

david.consultarSaldo();
david.depositar(170.21);
david.consultarSaldo();