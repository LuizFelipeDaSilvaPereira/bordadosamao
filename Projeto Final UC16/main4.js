var total = 0;
var i = 1;

var itemsHTML = "";

while(localStorage.getItem("produto" + i) !== null) {
    itemsHTML += '<div class="item">';
    itemsHTML += `<img src="${localStorage.getItem("imagem" + i)}" alt="${localStorage.getItem("produto" + i)}" />`;
    itemsHTML += '<div class="item-details">';
    itemsHTML += `<p>${localStorage.getItem("qtd" + i)} x ${localStorage.getItem("produto" + i)}</p>`;
    itemsHTML += `<p>R$: ${localStorage.getItem("valor" + i)}</p>`;
    itemsHTML += '</div>';
    itemsHTML += '</div>';

    valor = Number(localStorage.getItem("valor" + i));
    total += valor;
    i++;
}

document.getElementById("itens").innerHTML = itemsHTML;
document.getElementById("total").innerHTML = "Total: R$ " + total.toFixed(2);
    