let firstValue
let secondValue
let operator

let operatorButtonPressed = false;
let decimalButtonPressed = false;

let display = document.querySelector(".display");
let buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
    targetID = e.target.id;
    if (e.target.className === "number") {
        if (operatorButtonPressed) {
            display.textContent = ""
            operatorButtonPressed = false;
        }
        if (display.textContent.length < 15) {
            display.textContent += targetID
        }
    }
    if (targetID === "." && !decimalButtonPressed) {
        display.textContent += targetID
    }
    if (e.target.className === "operation") {
        if (firstValue) {
            secondValue = Number(display.textContent);
            display.textContent = operate(operator, firstValue, secondValue);
        }
        firstValue = Number(display.textContent);
        operatorButtonPressed = true;
        operator = targetID;
        console.log(firstValue);
    }
    if (targetID === "clear") {
        display.textContent = "";
        firstValue = "";
        secondValue = "";
        operator = "";
    }
    if (targetID === "equal" && firstValue) {
        secondValue = Number(display.textContent);
        display.textContent = operate(operator, firstValue, secondValue);
        firstValue = "";
        operator = "";
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
    if (operator === "divide" && numB === 0) {
        return "BOOM!"
    }

    switch (operator) {
        case "add":
            return Number(add(numA, numB).toFixed(7));
        case "subtract":
            return Number(subtract(numA, numB).toFixed(7));
        case "multiply":
            return Number(multiply(numA, numB).toFixed(7));
        case "divide":
            return Number(divide(numA, numB).toFixed(7));
    }
}