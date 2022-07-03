import { displayMatrix, newMatrix} from '../utilities.js'

function main() {
    let matrix = newMatrix(6)

    matrix = showMatrix(matrix)

    displayMatrix(matrix, 'Matriz:')
}

function showMatrix(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === 0 || i === 5) {
                matrix[i][j] = 1
            } else if (j === 0 || j === 5) {
                matrix[i][j] = 1
            } else if ((i === 1 || i === 4) && (j !== 0 && j !== 5)) {
                matrix[i][j] = 2
            } else if ((j === 1 || j === 4) && (i !== 0 && i !== 5)) {
                matrix[i][j] = 2
            } else if ((i === 2 || i === 3) && (j === 2 || j === 3)) {
                matrix[i][j] = 3
            }
        }
    }

    return matrix
}

main()