function enviar() {

let email = document.getElementById('email').value;
let senha = document.getElementById('password').value
let confirmaSenha = document.getElementById ('password1').value;
  

  if ((email == 0) || (senha == 0) || (confirmaSenha == 0)) {
    alert("Campo obrigatório, por favor preencha os campos obrigatórios")  
  }

confirmarSenha();
validaSenha();

}

let confirmarSenha = () => {

let senha = document.getElementById('password').value
let confirmaSenha = document.getElementById ('password1').value;

if (senha != confirmaSenha) {
  alert("As senhas não correspondem, digite novamente")
}
};


let validaSenha = () => {

let senha = document.getElementById('password').value;
let confirmaSenha = document.getElementById ('password1').value;

if (senha.length < 6 || senha.length > 10) {
  alert ("A senha deve conter de 6 a 10 caracteres");
}
};

