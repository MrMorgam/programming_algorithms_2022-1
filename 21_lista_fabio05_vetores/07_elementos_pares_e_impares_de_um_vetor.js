import { displayMessage, newArray,getNumber, isOdd } from '../utilities.js'

function main() {
    const length = getNumber('Digite o tamanho do vetor: ')

    const array1 = newArray(length)

    for (let i = 0; i < length; i++) {
        array1[i] = getNumber(`Digite o valor do ${i+1}º elemento: `)
    }

    const array2 = convertedArray(array1)

    displayMessage(`\nVetor B = (${array2})`)
}


function convertedArray(array1) {
    const array2 = newArray(array1.length)

    for (let i = 0; i < array1.length; i++) {
        if (isOdd(array1[i])) {
            array2[i] = 0
        } else {
            array2[i] = 1
        }
    }

    return array2
}


main()