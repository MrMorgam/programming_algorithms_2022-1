import { displayMatrix, displayMessage, getNumber, newMatrix } from '../utilities.js'

function main() {
    const order = getNumber('Digite a ordem da matriz: ')
    const matrix = newMatrix(order)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = getNumber(`Digite um valor para a posição ${i+1},${j+1}: `)
        }
    } 

    displayMessage(`\n`)
    displayMatrix(matrix, 'Matriz original:')

    const transposedMatrix = transposeMatrix(matrix)

    displayMessage(`\n`)
    displayMatrix(transposedMatrix, 'Matriz transposta:')
}


function transposeMatrix(matrix) {
    const transposedMatrix = newMatrix(matrix.length)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transposedMatrix[j][i] = matrix[i][j]
        }
    }

    return transposedMatrix
}


main()