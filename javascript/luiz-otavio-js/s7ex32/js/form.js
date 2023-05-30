class Formulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.iniciar();
  }

  iniciar() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.isInfoValid();
    if (this.validar === true) {
      alert("Formulário enviado.");
    }
  }

  isInfoValid() {
    this.validar = true;

    this.clearError();
    this.validarNome();
    this.validarSobrenome();
    this.validarCPF();
    this.validarUser();
    this.validarSenha();
  }

  validarNome() {
    const nome = document.querySelector("#inputnome");
    if (nome.value === "") {
      this.createError(`O campo "nome" não pode estar em branco.`, ".divnome");
      this.validar = false;
    }
  }

  validarSobrenome() {
    const sobrenome = document.querySelector("#inputsobrenome");
    if (sobrenome.value === "") {
      this.createError(
        `O campo "sobrenome" não pode estar em branco.`,
        ".divsobrenome"
      );
      this.validar = false;
    }
  }

  validarCPF() {
    const cpf = document.querySelector("#inputcpf");
    const cpf1 = new CPF(cpf.value);
    if (cpf1.resultado === false) {
      this.createError(
        `O campo "CPF" está em branco ou é inválido.`,
        ".divcpf"
      );
      this.validar = false;
    }
  }

  validarUser() {
    const usuario = document.querySelector("#inputusuario");
    if (usuario.value === "") {
      this.createError(
        `O campo "usuário" não pode estar em branco.`,
        ".divusuario"
      );
      this.validar = false;
    } else if (!usuario.value.match(/^[a-zA-z0-9]+$/g)) {
      this.createError(`Apenas letras e números.`, ".divusuario");
      this.validar = false;
    } else if (usuario.value.length < 3 || usuario.value.length > 12) {
      this.createError(
        `O campo "usuário" não tem a quantidade correta de digitos.`,
        ".divusuario"
      );
      this.validar = false;
    }
  }

  validarSenha() {
    const senha = document.querySelector("#inputsenha");
    const senhaconfirm = document.querySelector("#inputsenha-valid");

    if (senha.value === "") {
      this.createError(
        `O campo "senha" não pode estar em branco.`,
        ".divsenha"
      );
      this.validar = false;
    } else if (senha.value.length < 6 || senha.value.length > 12) {
      this.createError(
        `O campo "senha" não tem a quantidade correta de digitos.`,
        ".divsenha"
      );
      this.validar = false;
    }

    if (senhaconfirm.value === "") {
      this.createError(
        `O campo de confirmação de senha não pode estar em branco.`,
        ".divsenha-valid"
      );
      this.validar = false;
    }

    if (senhaconfirm.value !== senha.value) {
      this.createError(`As senhas não são iguais.`, ".divsenha-valid");
      this.validar = false;
    }
  }

  createError(msg, selector) {
    const texto = document.createElement("p");
    texto.innerHTML = msg;
    texto.classList.add("erro");
    document.querySelector(selector).appendChild(texto);
  }

  clearError() {
    document.querySelector(".divnome").innerHTML = "";
    document.querySelector(".divsobrenome").innerHTML = "";
    document.querySelector(".divcpf").innerHTML = "";
    document.querySelector(".divusuario").innerHTML = "";
    document.querySelector(".divsenha").innerHTML = "";
    document.querySelector(".divsenha-valid").innerHTML = "";
  }
}

const validar = new Formulario();
