<?php
include("conexao.php");

$nome = $_POST['nome'];
$email = $_POST['email'];
$cep = $_POST['cep'];
$telefone = $_POST['telefone'];
$senha = $_POST['senha'];

// Inserir no banco de dados
$sql = "INSERT INTO cliente (nome, email, cep, telefone, senha) 
        VALUES ('$nome', '$email', '$cep', '$telefone', '$senha')";

if (mysqli_query($conexao, $sql)) {
    echo "Usuário cadastrado com sucesso no banco de dados!";
    
    // Armazenar no localStorage
    echo "<script>
            localStorage.setItem('nome', '$nome');
            localStorage.setItem('email', '$email');
            localStorage.setItem('cep', '$cep');
            localStorage.setItem('telefone', '$telefone');
            localStorage.setItem('senha', '$senha');
          </script>";
} else {
    echo "ERRO ao se cadastrar no banco de dados!" . mysqli_error($conexao);
}

mysqli_close($conexao);
?>
