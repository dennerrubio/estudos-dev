function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (quantia) {
  if (quantia > this.saldo) {
    console.log(`SALDO INSUFICIENTE: R$${this.saldo}`);
    return;
  }
  this.saldo -= quantia;
  this.verSaldo();
};

Conta.prototype.depositar = function (quantia) {
  this.saldo += quantia;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`AG/C: ${this.agencia}/${this.conta} | SALDO: ${this.saldo}`);
};

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.construct = CC;

CC.prototype.sacar = function (quantia) {
  if (quantia > this.saldo + this.limite) {
    console.log(`SALDO INSUFICIENTE: R$${this.saldo}`);
    return;
  }
  this.saldo -= quantia;
  this.verSaldo();
};

const correnteTeste = new CC(123, 456, 25, 100);
correnteTeste.depositar(25);
correnteTeste.sacar(100);
correnteTeste.sacar(75);
correnteTeste.depositar(1000)

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.construct = CP;

const poupancaTeste = new CP(123, 456, 5000);
poupancaTeste.sacar(1000)
