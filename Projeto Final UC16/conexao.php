<?php

$host = "localhost";
$usuario = "root";
$senha = "Senac@2023";
$dbname = "bordados_mao";

$conexao = mysqli_connect($host, $usuario, $senha, $dbname);

if($conexao -> connect_error){
    echo "ERRO" . mysqli_connect($conexao);
} else {
    echo "Conexão Efetuado com Sucesso !" . "</br>";
}

?>