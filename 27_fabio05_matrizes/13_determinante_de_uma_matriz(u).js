import { displayMessage, getNumber, isOdd, newMatrix } from '../utilities.js'

function main() {
    const order = getNumber('Digite a ordem da matriz: ')
    const matrix = newMatrix(order)
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = getNumber(`Digite um valor para a posição ${i+1},${j+1}: `)
        }
    }

    const matrixDeterminant = matrixOrder2Determinant(matrix)

    displayMessage(`Determinante: ${matrixDeterminant}`)
}


function matrixDeterminant(matrix) { // Unfinished
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if ( i === j && isOdd(i)) {
                determinat += matrix[i][j]
            } else if (i === j && !isOdd(i)){
                determinat -= matrix[i]
            }
        }
    }
}




main()