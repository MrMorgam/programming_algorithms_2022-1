import { getNumber, getString, getIntegerInRange, newArray, displayMessage, newArray2 } from "./utilities.js"

function main() {
    const number = getNumber()
    const integer = getIntegerInRange()
    const string = getString()
    const array = newArray()
    const array2 = newArray2()

    displayMessage(number)
    displayMessage(integer)
    displayMessage(string)
    displayMessage(array)
    displayMessage(array2)
}

main()