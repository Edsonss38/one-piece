const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

function selecionarBotao(botao, indice) {
    const botoesSelecionados = document.querySelectorAll(".botao.selecionado");
    const personagemSelecionado = document.querySelector(
        ".personagem.selecionado"
    );

    // Remove a classe 'selecionado' de todos os botões e personagens
    botoesSelecionados.forEach((b) => b.classList.remove("selecionado"));
    personagemSelecionado.classList.remove("selecionado");

    // Adiciona a classe 'selecionado' ao botão e personagem clicados
    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
}

// Adiciona evento de clique a cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => selecionarBotao(botao, indice));
});
