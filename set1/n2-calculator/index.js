
/*
Full Name: Jessie B. Maralit
Section: IV-BSIT A
Activity: N2 - Modular Calculator
Date: November 27, 2026
*/

const path = require("path");
const operations = require("./operations");
const { formatResult } = require("./formatter");

// Read operation and numbers from the command line
const operation = process.argv[2];
const inputs = process.argv.slice(3);

console.log("\n=== MODULAR CALCULATOR ===");
console.log("Prepared by: Jessie B. Maralit");
console.log("Program:", path.basename(__filename));

const validOperations = [
    "add",
    "subtract",
    "multiply",
    "divide",
    "average"
];

if (!validOperations.includes(operation)) {
    console.log("Error: Unknown operation.");
    console.log("Use add, subtract, multiply, divide, or average.");

} else if (operation !== "average" && inputs.length !== 2) {
    console.log("Error: Please enter exactly two numbers.");

} else if (operation === "average" && inputs.length === 0) {
    console.log("Error: Please enter at least one number.");

} else {
    const numbers = inputs.map(Number);

    const invalidInput = inputs.some((value, index) => {
        return value.trim() === "" || !Number.isFinite(numbers[index]);
    });

    if (invalidInput) {
        console.log("Error: Numbers only.");

    } else {
        try {
            let result;

            if (operation === "add") {
                result = operations.add(numbers[0], numbers[1]);
            }

            if (operation === "subtract") {
                result = operations.subtract(numbers[0], numbers[1]);
            }

            if (operation === "multiply") {
                result = operations.multiply(numbers[0], numbers[1]);
            }

            if (operation === "divide") {
                result = operations.divide(numbers[0], numbers[1]);
            }

            if (operation === "average") {
                result = operations.average(numbers);
            }

            console.log(formatResult(operation, numbers, result));

        } catch (error) {
            console.log("Error:", error.message);
        }
    }
}