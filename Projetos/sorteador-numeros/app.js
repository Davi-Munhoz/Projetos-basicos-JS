function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroMin = parseInt(document.getElementById('de').value);
    let numeroMax = parseInt(document.getElementById('ate').value);
    let areaDeResposta = document.getElementById('resultado');
    let numero;
    let numerosSorteados = [];

    if (numeroMin >= numeroMax) {
        areaDeResposta.innerHTML = `<label class="texto__paragrafo">Erro: O valor "De" deve ser menor que o valor "Até".</label>`;
        return;
    }

    if (quantidade > (numeroMax - numeroMin + 1)) {
        areaDeResposta.innerHTML = `<label class="texto__paragrafo">Erro: A quantidade de números a serem sorteados é maior que o intervalo disponível.</label>`;
        return;
    }


    for(let i = 0; i < quantidade; i++){
        numero = gerarNumeroAleatorio(numeroMin, numeroMax);
        while(numerosSorteados.includes(numero)){
            numero = gerarNumeroAleatorio(numeroMin, numeroMax);
        }
        numerosSorteados.push(numero);
    }

areaDeResposta.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados.join(', ')}</label>`;

    alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora`;
    alterarStatusBotao();
}