/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let operation = process.argv[2]
    let result = parseInt(process.argv[3])
    if (!process.argv[2]) {
        return "No operation provided..."
    }
    if (!process.argv[3]) {
        return "No numbers provided..."
    }
    for (let i = 4; i < process.argv.length; i++) {
        let number = parseInt(process.argv[i])
        if (operation === "plus") {
            result += number;
        } else if (operation === "minus") {
            result -= number;
        } else {
            result = `Invalid operation: ${operation}`
        }
    }
    return result
}

// Don't change anything below this line.
module.exports = calculator;
