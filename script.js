console.log("Javascript funcionado!");

let display = document.getElementById("display");

let botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        let valor = botao.textContent;

        if (valor == "C") {
            display.textContent = "0";
        } else if (valor == "=") {
            let expressao = display.textContent;
            expressao = expressao.replace("x", "*");
            display.textContent = eval(expressao);
        } else if (valor == "←") {
            let atual = display.textContent;
            if (atual.length > 1) {
                display.textContent = atual.slice(0, -1);
            } else {
                display.textContent = "0";
            }
        } else {
            if (display.textContent == "0") {
                display.textContent = valor;
            } else {
                display.textContent += valor;
            }
        }

    });
});

