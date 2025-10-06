let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let lista = document.getElementById("lista-amigos").textContent;

    if(lista.includes(nomeAmigo.toUpperCase())){
        alert("Esse nome já foi adicionado!");
        return;
    } else if(nomeAmigo === ""){
        alert("Por favor, insira um nome válido.");
        return;
    } else if(lista === ""){
        document.getElementById("lista-amigos").textContent = nomeAmigo;
    } else{
        document.getElementById("lista-amigos").textContent += ", " + nomeAmigo;
    }
    amigos.push(nomeAmigo);
    document.getElementById("nome-amigo").value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = amigos
        .map((nome, index) => `<span onclick="remover(${index})">${nome}</span>`)
        .join(", ");
}

function remover(index) {
    amigos.splice(index, 1);
    atualizarLista();
}


function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function sortear() {
    if (amigos.length < 4) {
        alert("Adicione pelo menos quatro amigos para sortear!");
        return;
    } else if (amigos.length % 2 !== 0) {
        alert("Número ímpar de amigos! Adicione mais um amigo para evitar que alguém tire a si mesmo.");
        return;
    }

    embaralhar(amigos);

    let resultado = "";
    let listaResultado = document.getElementById("lista-sorteio");
    listaResultado.textContent = "";

    for (let i = 0; i < amigos.length; i += 2) {
        const pessoa1 = amigos[i];
        const pessoa2 = amigos[i + 1];

        if (pessoa2) {
            resultado += `${pessoa1} tirou ${pessoa2}\n`;
        } else {
            const randomIndex = Math.floor(Math.random() * (amigos.length - 1));
            resultado += `${pessoa1} tirou ${amigos[randomIndex]}\n`;
        }
    }

    listaResultado.textContent = resultado;
}

function reiniciar(){
    let lista = document.getElementById("lista-amigos").textContent = "";
    let resultado = document.getElementById("lista-sorteio").textContent = "";
    let nomeAmigo = document.getElementById("nome-amigo").value = "";
}