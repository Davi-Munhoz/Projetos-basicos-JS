function comprar(){
    let quantidadeIngressos = parseInt(document.getElementById("qtd").value);
    let tipoIngresso = document.getElementById("tipo-ingresso").value;

    if (quantidadeIngressos <= 0){
        alert("Quantidade inválida, insira um valor maior que zero.");
    } else if (tipoIngresso === "pista"){
        comprarPista(quantidadeIngressos);
    } else if (tipoIngresso === "inferior") {
        comprarCadeiraInferior(quantidadeIngressos);
    } else if (tipoIngresso === "superior"){
        comprarCadeiraSuperior(quantidadeIngressos);
    }
}

function comprarPista(qtd){
    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);

    if (qtd > quantidadePista){
        alert("Quantidade indisponível para tipo Pista");
    } else {
        quantidadePista = quantidadePista - qtd;
        document.getElementById("qtd-pista").textContent = quantidadePista;
        alert("Compra realizada com sucesso!");
    }
}

function comprarCadeiraInferior(qtd){
    let quantidadeCadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (qtd > quantidadeCadeiraInferior){
        alert("Quantidade indisponível para tipo Cadeira Inferior");
    } else {
        quantidadeCadeiraInferior = quantidadeCadeiraInferior - qtd;
        document.getElementById("qtd-inferior").textContent = quantidadeCadeiraInferior;
        alert("Compra realizada com sucesso!");
    } 
}

function comprarCadeiraSuperior(qtd){
    let quantidadeCadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent); 
    if (qtd > quantidadeCadeiraSuperior){
        alert("Quantidade indisponível para tipo Cadeira Superior");
    } else {
        quantidadeCadeiraSuperior = quantidadeCadeiraSuperior - qtd;
        document.getElementById("qtd-superior").textContent = quantidadeCadeiraSuperior;
        alert("Compra realizada com sucesso!");
    }  
}