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
        firstValue = Number(display.textContent);
        display.textContent = "";
        operator = targetID;
        console.log(firstValue);
    }
    if (targetID === "clear") {
        display.textContent = "";
        firstValue = "";
        secondValue = "";
        operator = "";
    }
    if (targetID === "equal") {
        secondValue = Number(display.textContent);
        display.textContent = operate(operator, firstValue, secondValue);
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
            return add(numA, numB);
        case "subtract":
            return subtract(numA, numB);
        case "multiply":
            return multiply(numA, numB);
        case "divide":
            return divide(numA, numB);
    }
}