var intervalo = 4000;

function slide4() {
    document.getElementById('slide2').src = "imagens/propaganda1.jpg";
    setTimeout(slide5, intervalo);
}

function slide5() {
    document.getElementById('slide2').src = "imagens/propaganda4.jpg";
    setTimeout(slide6, intervalo);
}

function slide6() {
    document.getElementById('slide2').src = "imagens/propaganda6.jpg";
    setTimeout(slide4, intervalo);
}

// Inicie o primeiro slide quando a página carregar
window.onload = function () {
    slide4();
};
