import { displayMatrix, newMatrix, getNumber } from '../utilities.js'

function main() {
    const order = getNumber('Digite a ordem da matriz: ')
    
    const identityMatrix = formIdentityMatrix(order)

    displayMatrix(identityMatrix)
}

function formIdentityMatrix(order) {
    const identityMatrix = newMatrix(order)

    for (let i = 0; i < identityMatrix.length; i++) {
        for (let j = 0; j < identityMatrix[i].length; j++) {
            if (i === j) {
                identityMatrix[i][j] = 1
            } else {
                identityMatrix[i][j] = 0
            }
        }
    }

    return identityMatrix
}

main()