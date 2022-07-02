import { displayMessage, newArray, getNumber } from '../utilities.js'

function main() {
    const array = newArray(20)

    displayMessage('\nVetor A:')

    for (let i = 0; i < 20; i++) {
        array[i] = getNumber(`Digite o número na posição [${i+1}]: `)
    }

    const differenceSquare = calcDifferenceSquareOfArray(array)

    displayMessage(`\nS = ${differenceSquare}`)
}


function calcDifferenceSquareOfArray(array) {
    let j = array.length - 1
    let s = 0

    for (let i = 0; i < (array.length / 2); i++) {
        console.log(`(${array[i]} - ${array[j]})² = ${(array[i] - array[j]) ** 2}`)
        s += (array[i] - array[j]) ** 2
        j--
       
    }

    return s
}


main()