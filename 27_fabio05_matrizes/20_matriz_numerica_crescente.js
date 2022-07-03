import { displayMatrix, newMatrix} from '../utilities.js'

function main() {
    let matrix = newMatrix(5)

    matrix = showMatrix(matrix)

    displayMatrix(matrix, 'Matriz:')
}

function showMatrix(matrix) {
    let n = 1

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = n
            n++
        }
    }

    return matrix
}

main()