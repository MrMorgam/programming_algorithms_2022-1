import { displayMessage, getNumber, newMatrix } from '../utilities.js'

function main() {
    const order = getNumber('Digite a ordem da matriz: ')
    const matrix = newMatrix(order)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = getNumber(`Digite um valor para a posição ${i+1},${j+1}: `)
        }
    }

    if (isSymmetricMatrix(matrix)) {
        displayMessage('\nA matriz é simétrica!')
    } else {
        displayMessage('\nA matriz não é simétrica!')
    }
}


function isSymmetricMatrix(matrix) {
    let counter = 0
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                counter++
            }
        }
    }

    return counter === 0
}


main()