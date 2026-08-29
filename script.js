console.log("Javascript funcionado!");

let display = document.getElementById("display");

let botoes = document.querySelectorAll("button");

let historico = JSON.parse(localStorage.getItem("operação"));

if (historico == null) {
    historico = [];
}


function addHistorico(expressaooriginal, resultado) {
    if (historico.length >= 5) {
        historico.shift();
    }
    historico.push(expressaooriginal + " = " + resultado);

    localStorage.setItem("operação", JSON.stringify(historico));

    let lista = document.getElementById("lista-historico");
    lista.innerHTML = "";
    historico.forEach(function (item) {
        lista.innerHTML += "<li>" + item + "</li>";

    });
}

function addCalcular(expressao) {
    let resultado;
    try {
        resultado = eval(expressao);
    } catch (err) {
        display.textContent = "Erro";
        return;
    }

    if (isNaN(resultado) || !isFinite(resultado)) {
        display.textContent = "Erro";
        return;
    }

    if (resultado == undefined) {
        display.textContent = "Erro";
        return;
    }

    return resultado;
}

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {
        let valor = botao.textContent;

        if (valor == "C") {
            display.textContent = "0";
        } else if (valor == "=") {
            let expressaooriginal = display.textContent;
            let expressao = display.textContent.replaceAll("x", "*");
            let resultado = addCalcular(expressao);


            resultado = parseFloat(resultado.toFixed(10));
            addHistorico(expressaooriginal, resultado);
            display.textContent = resultado;


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
document.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key == "Enter" || key == "=") {
        let expressaooriginal = display.textContent;
        let expressao = display.textContent.replaceAll("x", "*");
        let resultado = addCalcular(expressao);



        resultado = parseFloat(resultado.toFixed(10));
        addHistorico(expressaooriginal, resultado);
        display.textContent = resultado;

    } else if (key == "Backspace") {
        let atual = display.textContent;
        if (atual.length > 1) {
            display.textContent = atual.slice(0, -1);
        } else {
            display.textContent = "0";
        }
    } else if (key == "Escape") {
        display.textContent = "0";
    } else {
        if (display.textContent == "0") {
            display.textContent = key;
        } else {
            display.textContent += key;
        }
    }
});
