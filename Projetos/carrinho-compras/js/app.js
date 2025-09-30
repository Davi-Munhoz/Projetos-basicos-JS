let totalGeral;
limpar();

function adicionar(){
    let quantidade = document.getElementById("quantidade").value;
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let carrinho = document.getElementById("lista-produtos");
    let valorTotal = document.getElementById("valor-total");
    let preco = quantidade * valorUnitario;

    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$ ${preco}</span>
        </section>`

    totalGeral += preco;
    valorTotal.textContent = `R$ ${totalGeral},00`;

    document.getElementById("quantidade").value = 0;
    
}

function limpar(){
    totalGeral = 0;
    let carrinho = document.getElementById("lista-produtos").innerHTML = "";
    let valorTotal = document.getElementById("valor-total").innerHTML = "R$ 0,00";
}