
/*
Full Name: Jessie B. Maralit
Section: IV-BSIT A
Activity: N2 - Modular Calculator
Date: November 27, 2026
*/

// Format the result for display
function formatResult(operation, numbers, result) {
    let symbol = "";

    if (operation === "add") {
        symbol = "+";
    }

    if (operation === "subtract") {
        symbol = "-";
    }

    if (operation === "multiply") {
        symbol = "*";
    }

    if (operation === "divide") {
        symbol = "/";
    }

    if (operation === "average") {
        return `Average of ${numbers.join(", ")} = ${result}`;
    }

    return `${numbers[0]} ${symbol} ${numbers[1]} = ${result}`;
}

module.exports = { formatResult };