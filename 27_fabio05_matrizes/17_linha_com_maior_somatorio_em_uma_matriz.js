import { displayMessage, getNumber, newMatrix } from '../utilities.js'

function main() {
    const order = getNumber('Digite a ordem da matriz: ')
    const matrix = newMatrix(order)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = getNumber(`Digite um valor para a posição ${i+1},${j+1}: `)
        }
    }

    const rowWithGreatestSum = findRowWithGreatestSum(matrix)

    displayMessage(`Linha com maior somatório: ${rowWithGreatestSum}`)
}

function findRowWithGreatestSum(matrix) {
    let rowSum = 0
    let greatestRowSum = 0
    let greatestRowSumIndex = 1

    for (let i = 0; i < matrix.length; i++) {
        rowSum = 0

        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j]
        }
        
        if(rowSum > greatestRowSum) {
            greatestRowSum = rowSum
            greatestRowSumIndex = i+1
        }
    }

    return greatestRowSumIndex
}


main()