function Calculadora() {
  this.display = document.querySelector("#texto");

  this.iniciar = function () {
    this.detectarBotoes();
  };

  this.clear = function () {
    this.display.value = "";
  };

  this.apagar = function () {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.resultado = function () {
    let conta = this.display.value;
    if (!conta) {
      alert("Conta Inválida");
    }
    try {
      conta = eval(conta);
      this.display.value = conta;
    } catch (e) {
      alert("Conta Inválida");
    }
  };

  this.detectarBotoes = function () {
    document.addEventListener("click", (e) => {
      el = e.target;
      if (el.classList.contains("btn-num")) {
        this.pegarValor(el.value);
      }
      if (el.classList.contains("btn-clear")) {
        this.clear();
      }
      if (el.classList.contains("btn-erase")) {
        this.apagar();
      }
      if (el.classList.contains("btn-eq")) {
        this.resultado();
      }
    });
  };

  this.pegarValor = function (valor) {
    this.display.value += valor;
  };
}

const calculadora = new Calculadora();
calculadora.iniciar();
