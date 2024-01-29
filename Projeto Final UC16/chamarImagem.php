<?php
        // Recupera o parâmetro 'imagem' da URL
        $imagem = isset($_GET['produtos']) ? $_GET['produtos'] : '';

        // Exibe a imagem
        echo "<img src='imagens/$imagem' alt='Imagem'>";
    ?>