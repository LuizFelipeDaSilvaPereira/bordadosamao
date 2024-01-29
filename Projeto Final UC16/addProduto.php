<?php

include("conexao.php");

$nome_produto = $_POST['nomeProduto'];
$tamanho = $_POST['tamanho'];
$preco = $_POST['preco'];
// Verifica se o índice 'descricao' está definido em $_POST
$descricao_produto = isset($_POST['message']) ? $_POST['message'] : '';


$sql = "INSERT INTO roupas (nome_roupa, tamanho, preco, descricao_produto) VALUES ('$nome_produto', '$tamanho', '$preco', '$descricao_produto')";

if(mysqli_query($conexao, $sql)){
    $message = "Produto Cadastrado com Sucesso!";
} else {
    $message = "ERRO ao cadastrar produto " . mysqli_error($conexao);
}

mysqli_close($conexao);

?>
