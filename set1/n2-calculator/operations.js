
/*
Full Name: Jessie B. Maralit
Section: IV-BSIT A
Activity: N2 - Modular Calculator
Date: November 27, 2026
*/

// Functions for mathematical operations

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
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

function average(numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total / numbers.length;
}

// Allow other files to use these functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};
