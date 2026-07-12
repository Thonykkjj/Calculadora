const display = document.getElementById("display");

const botoes = document.querySelectorAll(".botoes button");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {

        const valor = botao.dataset.value;
        const acao = botao.dataset.action;

        // Botões numéricos e operadores
        if (valor) {
            display.value += valor;
            return;
        }

        // Limpar visor
        if (acao === "clear") {
            display.value = "";
            return;
        }

        // Apagar último caractere
        if (acao === "delete") {
            display.value = display.value.slice(0, -1);
            return;
        }

    });
});