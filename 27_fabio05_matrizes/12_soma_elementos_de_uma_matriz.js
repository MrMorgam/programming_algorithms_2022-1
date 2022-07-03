import { displayMatrix, displayMessage, getNumber, newMatrix } from '../utilities.js'

function main() {
    const order = getNumber('Digite a ordem da matriz: ')
    const matrix = newMatrix(order)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = getNumber(`Digite um valor para a posição ${i+1},${j+1}: `)
        }
    }

    displayMatrix(matrix)

    const sumElementsInMainDiagonal = sumElementsInMainDiagonalOfMatrix(matrix)
    const sumElementsInSecondaryDiagonal = sumElementsInSecondaryDiagonalOfMatrix(matrix)
    const sumElementsNotInMainOrSecondaryDiagonals = sumElementsNotInMainOrSecondaryDiagonalsOfMatrix(matrix)

    displayMessage(`Soma dos elementos na diagonal principal: ${sumElementsInMainDiagonal}`)
    displayMessage(`Soma dos elementos na diagonal secundária: ${sumElementsInSecondaryDiagonal}`)
    displayMessage(`Soma dos elementos que não estão na diagonal principal nem na secundária: ${sumElementsNotInMainOrSecondaryDiagonals}`)
}


function sumElementsInMainDiagonalOfMatrix(matrix) {
    let sum = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                sum += matrix[i][j]
            }
        }
    }

    return sum
}


function sumElementsInSecondaryDiagonalOfMatrix(matrix) {
    let sum = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i + j === matrix.length - 1) {
                sum += matrix[i][j]
            }
        }
    }

    return sum
}


function sumElementsNotInMainOrSecondaryDiagonalsOfMatrix(matrix) {
    let sum = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i !== j && i + j !== matrix.length -1) {
                sum += matrix[i][j]
            }
        }
    }

    return sum
}


main()