<?php

include("conexao.php");
$email = $_POST['loginEmail'];
$senha =$_POST['loginSenha'];

$result_usuario = "SELECT * FROM cliente WHERE nome, email LIKE '%$nome%, %$email%'";
$resultado_usuario = mysqli_query($conexao, $result_usuario);

while($row_usuario = mysqli_fetch_assoc($resultado_usuario));

endwhile;

?>
