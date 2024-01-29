<?php

include("conexao.php");

if(isset($_POST["id_roupa"])){
    $id = $_POST["id_roupa"];
    $excluir = "DELETE FROM roupas WHERE id_roupa = ($id)";

    if(mysqli_query($conexao, $excluir)){
        $message = "Produto Deletado com Sucesso !";
    } else {
        $message = "ERRO ao tentar Deletar Produto" . mysqli_error($conexao);
    }
}

?>