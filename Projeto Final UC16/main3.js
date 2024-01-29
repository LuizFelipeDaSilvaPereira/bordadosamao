
let carrinho = [];

function adicionarProduto(nome,codigo,preco,imagem){
    carrinho.push({nome,codigo,preco,imagem});
    atualizarCarrinho();
}

function removerProduto(index){
    carrinho.splice(index,1);
    atualizarCarrinho();
}

function atualizarCarrinho(){

    const listaCarrinho = document.getElementById("listar_carrinho");
    listaCarrinho.innerHTML = "";

    carrinho.forEach((produto,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `
        <img src= "${produto.imagem}"><br>
        <span>${produto.nome}</span>
        <span>${produto.preco}</span>
        <button onclick= "removerProduto(${index})">Remover Produto </button>
        `;
        listaCarrinho.appendChild(li);
    });

    const totalCarrinho = document.getElementById("total-carrinho");
    const total = carrinho.reduce((total,produto) => total + produto.preco, 0);
    totalCarrinho.innerText = total.toFixed(2);

    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.style.display = 'block';
}

function addCarrinho(nome, qtd, preco, imagem, codigo) {
    let posicao = 1;

    while (localStorage.getItem("produto" + posicao) !== null) {
        posicao++;
    }

    localStorage.setItem("produto" + posicao, nome);
    localStorage.setItem("qtd" + posicao, qtd);
    localStorage.setItem("valor" + posicao, preco);
    localStorage.setItem("imagem" + posicao, imagem);  
    localStorage.setItem("codigo" + posicao, codigo);

    alert("Produto adicionado ao Carrinho de Compras");
}

//------------------------------------------------------------------------------------------------------------------//

//função auto executavel para fezer a compra do produto através do PayPal
(function(){

    paypal.Buttons({
        createOrder: function(data, actions){

            return actions.order.create({
                purchase_units: [{

                    amount:{
                        currency_code:'USD',
                        value: carrinho.reduce((total,produto)=> total + produto.preco,0)
                    }
                }]
            });
        },

        onApprove: function(data,actions){

            return actions.order.capture().then(function(details){

                alert("Pagamento realizado com Sucesso !");
                console.log(details);
                carrinho = []; //limpar o carrinho após ser realizada a compra do produto
                atualizarCarrinho();
            });
        },

        onError: function(err){

            alert("Ocorreu um erro durante o processo pagamento", err);
        }

    }).render('#paypal-button-container');
})();