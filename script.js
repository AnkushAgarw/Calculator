let firstValue
let secondValue
let operator

let display = document.querySelector(".display");
let buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
    targetID = e.target.id;
    if (e.target.className === "number") {
        display.textContent += targetID
    }
    if (e.target.className === "operation") {

    }
    if (targetID === "clear") {
        display.textContent = ""
    }
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, numA, numB) {
    switch (operator) {
        case "add":
            add(numA, numB);
            break;
        case "subtract":
            subtract(numA, numB);
            break;
        case "multiply":
            multiply(numA, numB);
            break;
        case "divide":
            divide(numA, numB);
            break;
    }
}