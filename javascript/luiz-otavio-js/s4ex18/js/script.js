function createCalc() {
  return {
    display: document.querySelector("#texto"),

    iniciar() {
      this.detectBtn();
    },

    clearContent() {
      this.display.value = "";
    },

    eraseContent() {
      this.display.value = this.display.value.slice(0, -1);
    },

    finishContent() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta Inválida");
        }
        this.display.value = conta;
      } catch (e) {
        alert("Conta Inválida");
        return;
      }
    },

    detectBtn() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;
          if (el.classList.contains("btn-num")) {
            this.displayConteudo(el.value);
          }
          if (el.classList.contains("btn-clear")) {
            this.clearContent();
          }
          if (el.classList.contains("btn-erase")) {
            this.eraseContent();
          }
          if (el.classList.contains("btn-eq")) {
            this.finishContent();
          }
        }.bind(this)
      );
    },

    displayConteudo(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = createCalc();
calculadora.iniciar();
