import { displayMessage, getString, newArray } from '../utilities.js'

function main() {
    const binaryNumber = getString()

    const decimalNumber = convertBinaryToDecimal(binaryNumber)
    const hexadecimalNumber = convertBinaryToHexadecimal(binaryNumber)

    displayMessage(`Número na base decimal: ${decimalNumber}`)
    displayMessage(`Número na base hexadecimal: ${hexadecimalNumber}`)
}


function convertBinaryToDecimal(binaryNumber) {
    let decimalNumber = 0
    
    let j = 0

    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        if (binaryNumber[i] === '1') {
            decimalNumber += (2 ** j) * 1
        }

        j++
    }

    return decimalNumber
}


function convertBinaryToHexadecimal(binaryNumber) {
    let hexadecimalNumberArray = newArray()
    let decimalNumber = 0
    let hexadecimalDigit = 0

    for (let i = binaryNumber.length - 1; i >= 0; i -= 4) {
        decimalNumber = Number(binaryNumber[i]) * 1
        decimalNumber += Number(binaryNumber[i-1]) * 2
        decimalNumber += Number(binaryNumber[i-2]) * 4
        decimalNumber += Number(binaryNumber[i-3]) * 8

        if (decimalNumber < 10) {
            hexadecimalDigit = String(decimalNumber)
        } else if (decimalNumber === 10) {
            hexadecimalDigit = 'A'
        } else if (decimalNumber === 11) {
            hexadecimalDigit = 'B'
        } else if (decimalNumber === 12) {
            hexadecimalDigit = 'C'
        } else if (decimalNumber === 13) {
            hexadecimalDigit = 'D'
        } else if (decimalNumber === 14) {
            hexadecimalDigit = 'E'
        } else if (decimalNumber === 15) {
            hexadecimalDigit = 'F'
        }

        hexadecimalNumberArray[(i + 1) / 4] = hexadecimalDigit
    }

    let hexadecimalNumber = ''

    for (let i = 1; i < hexadecimalNumberArray.length; i++) {
        hexadecimalNumber = hexadecimalNumber.concat(hexadecimalNumberArray[i])
    }

    return hexadecimalNumber
}


main()