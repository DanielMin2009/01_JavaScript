let result = "";

function callOperation(operation) {
    document.getElementById("operation").innerHTML = operation;
    document.getElementById("operation").setAttribute("class", "operator");
}

function addition(n1, n2) {
    result = n1 + n2;
}

function subtraction(n1, n2) {
    document.getElementById("operation").innerHTML = "-";
    document.getElementById("operation").setAttribute("class", "operator");
    result = n1 - n2;
}

function multiplication(n1, n2) {
    document.getElementById("operation").innerHTML = "*";
    document.getElementById("operation").setAttribute("class", "operator");
    result = n1 * n2;
}

function division(n1, n2) {
    document.getElementById("operation").innerHTML = "/";
    document.getElementById("operation").setAttribute("class", "operator");
    result = n1 / n2;
}

function modul(n1, n2) {
    document.getElementById("operation").innerHTML = "%";
    document.getElementById("operation").setAttribute("class", "operator");
    result = n1 % n2;
}

function clearDataCalculator() {
    document.getElementById("operation").innerHTML = "c";
    document.getElementById("operation").setAttribute("class", "operator");

    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("result").innerText = "";

    n1 = 0;
    n2 = 0;

    operation = "";
}

function calculate() {


    document.getElementById("calculadoraGrid").removeAttribute("class");

    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);

    let operator = document.getElementById("operation").textContent;

    switch (operator) {
        case "+":
            addition(n1, n2);

            break;

        case "-":
            subtraction(n1, n2);
            break;

        case "*":
            multiplication(n1, n2);
            break;

        case "/":
            division(n1, n2);
            break;

        case "%":
            modul(n1, n2);
            break;

        default: ""

    }

    document.getElementById("result").innerHTML = result;

    escalable(button08);

}