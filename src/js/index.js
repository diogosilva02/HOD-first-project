// - passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

// - passo 2 - dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // - passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // - passo 4 - marcar o botão clicado como se estivesse selecionado
        marcarBotaoSelecionado(botao);

        // - passo 5 - esconder a imagem anterior selecionada
        esconderImagemAtiva();

        // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado 
        mostrarImagemFundo(indice);

        // - passo 7 - esconder a informação do dragão anteriormente selecionado e depois mostrar a correta
        escondendoInformacaoAtiva();

        mostrarInformacoes(indice);
    })
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function escondendoInformacaoAtiva() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
