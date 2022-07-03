import { displayMessage, getNumber, newMatrix } from '../utilities.js'

function main() {
    const order = getNumber('Digite a ordem da matriz: ')
    const matrix = newMatrix(order)
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = getNumber(`Digite um valor para a posição ${i+1},${j+1}: `)
        }
    }

    const greatestElement = findGreatestElementInMatrix(matrix)
    const smallestElement = findSmallestElementInMatrix(matrix)

    displayMessage(`Maior elemento: ${greatestElement}`)
    displayMessage(`Menor elemento: ${smallestElement}`)
}


function findGreatestElementInMatrix(matrix) {
    let greatestElement = matrix[0][0]

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > greatestElement) {
                greatestElement = matrix[i][j]
            }
        }
    }

    return greatestElement
}


function findSmallestElementInMatrix(matrix){
    let smallestElement = matrix[0][0]

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < smallestElement) {
                smallestElement = matrix[i][j]
            }
        }
    }

    return smallestElement
}


main()