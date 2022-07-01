import { displayMessage, getNumber, newArray } from '../utilities.js'

function main() {
    const length = getNumber('Digite o tamanho do vetor: ')
    const array = newArray(length)

    for (let i = 0; i < length; i++) {
        array[i] = getNumber(`Digite o número na posição [${i+1}]: `)
    }
    
    const invertedArray = invertArray(array)

    displayMessage(`\nArray invertido: (${invertedArray})`)
}


function invertArray(array) {
    const length = array.length
    let invertedArray = newArray(length)
    
    let j = length - 1

    for (let i = 0; i < length; i++) {
        invertedArray[i] = array[j]
        j--
    }

    return invertedArray
}


main()