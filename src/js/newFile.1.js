botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botoesSelecionados =
            document.querySelectorAll(".botao.selecionado");
        botoesSelecionados.forEach((botaoSelecionado) => {
            botaoSelecionado.classList.remove("selecionado");
        });
        botao.classList.add("selecionado");
        const personagemSelecionado = document.querySelector(
            ".personagem.selecionado"
        );
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});
