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
        } else {
            if (display.textContent == "0") {
                display.textContent = valor;
            }else{
                display.textContent += valor;
            }
        }
    });
});

