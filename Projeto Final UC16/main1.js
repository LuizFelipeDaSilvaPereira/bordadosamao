function validarFormulario() {
    var nome = document.forms["formulario"]["nome"].value;
    var email = document.forms["formulario"]["email"].value;
    var cep = document.forms["formulario"]["cep"].value;
    var telefone = document.forms["formulario"]["telefone"].value;
    var senha = document.forms["formulario"]["senha"].value;

    if (nome == "") {
        alert("Por favor insira seu nome !");
        return false;
    }

    if (email == "") {
        alert("Por favor insira seu email !");
        return false;
    } else if (!validarEmail(email)) {
        alert("Por favor insira algum E-mail válido !");
        return false;
    }

    if (cep == "") {
        alert("Por favor insira seu CEP !");
        return false;
    }

    if (telefone == "") {
        alert("Por favor insira seu telefone !");
        return false;
    } 

    if (senha == "") {
        alert("Por favor crie uma senha caso já tenha insira !");
        return false;
    } else if (!validarSenha(senha)) {
        alert("A senha deve conter pelo menos 8 caracteres, incluindo pelo menos um número, uma letra minúscula e uma letra maiúscula e caracteres especiais.");
        return false;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("cep", cep);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("senha", senha);

    return true;
}

function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

function validarSenha(senha) {
    return senha.length >= 8 && /[0-9]/.test(senha) && /[a-z]/.test(senha) && /[A-Z]/.test(senha) && /[!@#$%&*()+-]/.test(senha);
}

function exibirDados() {
    var nome = localStorage.getItem("nome");
    var email = localStorage.getItem("email");
    var cep = localStorage.getItem("cep");
    var telefone = localStorage.getItem("telefone");
    var senha = localStorage.getItem("senha");

    alert("Nome: " + nome + "\nE-mail: " + email + "\nCEP: " + cep + "\nTelefone: " + telefone + "\nSenha: " + senha + "\nDados de cadastro salvos com sucesso !");
}