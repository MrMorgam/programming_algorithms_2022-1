import { getNumber, newMatrix, displayMessage } from '../utilities.js'

function main() {
    const order = getNumber('Digite a ordem da matriz: ')
    const matrix = newMatrix(order)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = getNumber(`Digite um valor para a posição ${i+1},${j+1}: `)
        }
    }

    const sumPositiveNumbers = sumPositiveNumbersInMatrix(matrix)
    const sumNegativeNumbers = sumNegativeNumbersInMatrix(matrix)

    displayMessage(`\nSoma dos números positivos na matriz: ${sumPositiveNumbers}`)
    displayMessage(`Soma dos números negativos na matriz: ${sumNegativeNumbers}`)
}

function sumPositiveNumbersInMatrix(matrix) {
    let sumPositiveNumbers = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) {
                sumPositiveNumbers += matrix[i][j]
            }
        }
    }

    return sumPositiveNumbers
}


function sumNegativeNumbersInMatrix(matrix) {
    let sumNegativeNumbers = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < 0) {
                sumNegativeNumbers += matrix[i][j]
            }
        }
    }

    return sumNegativeNumbers
}


main()