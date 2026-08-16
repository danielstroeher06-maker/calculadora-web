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
        } else if (valor == "CE") {
            display.textContent = "0";
        } else if (valor == "%") {
            display.textContent = eval(display.textContent) / 100;
        } else if (valor == "1/x") {
            display.textContent = 1 / eval(display.textContent);
        } else if (valor == "x²") {
            let num = eval(display.textContent);
            display.textContent = num * num;
        } else if (valor == "√x") {
            display.textContent = Math.sqrt(eval(display.textContent));
        } else if (valor == "+/-") {
            display.textContent = eval(display.textContent) * -1;
        } else {
            if (display.textContent == "0") {
                display.textContent = valor;
            } else {
                display.textContent += valor;
            }
        }

    });
});

