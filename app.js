let amigos = [];
let amigoSorteado = [];

function adicionarAmigo() {
    amigos.push(document.getElementById('amigo'));
}
function sortearAmigo() {
    let sorteio = amigos[Math.random() * (amigos.length() + 1)];
    if (amigoSorteado.length == amigos.length) {
        alert('Todos os nomes já foram sorteados.');
        amigoSorteado = [];
    }
    if (amigoSorteado.includes(sorteio)) {
        sortearAmigo();
    }
    return sorteio;
}
function listarAmigo() {
    for(const amigo of amigos) {
        console.log(amigo)
    }
}
