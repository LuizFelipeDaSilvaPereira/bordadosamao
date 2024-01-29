function validarLogin() {
    let email = document.getElementById("loginEmail").value;
    let senha = document.getElementById("loginSenha").value;

    let emailArmazenado = localStorage.getItem("email");
    let senhaArmazenado = localStorage.getItem("senha");

    if(email === 'pollyanaMoça@gmail.com' && senha === '@Pollyana2024'){
        alert("Login Bem-Sucedido");
        window.location.href= "indexMenu.html";

    } if (email.trim() === emailArmazenado.trim() && senha.trim() === senhaArmazenado) {
        alert("Login Bem-Sucetido !");
        window.location.href = "indexMenu2.html";
    } else {
        alert("E-mail ou Senha incorreto !");
    }
}

function verDados(){
    var nome = localStorage.getItem("nome");
    var email = localStorage.getItem("email");
    var cep = localStorage.getItem("cep");
    var telefone = localStorage.getItem("telefone");
    var senha = localStorage.getItem("senha");

    alert("Nome: " + nome + "\nE-mail: " + email + "\nCEP: " + cep + "\nTelefone: " + telefone + "\nSenha: " + senha + "\nDados de cadastro salvos com sucesso !");
    
}