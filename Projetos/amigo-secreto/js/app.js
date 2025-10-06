let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let lista = document.getElementById("lista-amigos").textContent;

    if(lista.includes(nomeAmigo)){
        alert("Esse nome já foi adicionado!");
    } else if(nomeAmigo === ""){
        alert("Por favor, insira um nome válido.");
    } else if(lista === ""){
        document.getElementById("lista-amigos").textContent = nomeAmigo;
    } else{
        document.getElementById("lista-amigos").textContent += ", " + nomeAmigo;
    }
    amigos.push(nomeAmigo);
    document.getElementById("nome-amigo").value = "";
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function sortear() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
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