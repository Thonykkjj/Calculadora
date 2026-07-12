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
// Calcular resultado
        if (acao === "calculate") {

            try {

                display.value = eval(display.value);

            } catch {

                display.value = "Erro";

            }

            return;
        }
        // Raiz quadrada
if (acao === "sqrt") {

    display.value = Math.sqrt(Number(display.value));

    return;
}

// Quadrado
if (acao === "square") {

    display.value = Math.pow(Number(display.value), 2);

    return;
}

// Porcentagem
if (acao === "percent") {

    display.value = Number(display.value) / 100;

    return;
}

// PI
if (acao === "pi") {

    if (display.value === "") {

        display.value = Math.PI;

    } else {

        display.value += "*" + Math.PI;

    }

    return;
}

// Euler
if (acao === "e") {

    if (display.value === "") {

        display.value = Math.E;

    } else {

        display.value += "*" + Math.E;

    }

    return;
}
// Potência
if (acao === "power") {

    display.value += "**";

    return;
}

// seno
if (acao === "sin") {

    display.value = Math.sin(Number(display.value) * Math.PI / 180);

    return;
}

// cosseno
if (acao === "cos") {

    display.value = Math.cos(Number(display.value) * Math.PI / 180);

    return;
}

// tangente
if (acao === "tan") {

    display.value = Math.tan(Number(display.value) * Math.PI / 180);

    return;
}

// log
if (acao === "log") {

    display.value = Math.log10(Number(display.value));

    return;
}

// ln
if (acao === "ln") {

    display.value = Math.log(Number(display.value));

    return;
}

// fatorial
if (acao === "factorial") {

    let numero = Number(display.value);

    let resultado = 1;

    for (let i = 2; i <= numero; i++) {

        resultado *= i;

    }

    display.value = resultado;

    return;
}
    });
});