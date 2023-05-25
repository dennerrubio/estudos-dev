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

const contadaina = new Conta(234678, 1108, 20);
contadaina.depositar(380);
contadaina.sacar(250);
contadaina.sacar(170);
