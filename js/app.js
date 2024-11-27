var btnEntrar = document.querySelector("#entrar");

var btnCadastro = document.querySelector("#cadastro");

var body = document.querySelector("body");

btnEntrar.addEventListener("click", function () {
    body.className = "entrar-js";
});

btnCadastro.addEventListener("click", function (){
    body.className = "cadastro-js"
});