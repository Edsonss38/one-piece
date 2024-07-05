botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado =
            document.querySelectorAll(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");
    });
});
