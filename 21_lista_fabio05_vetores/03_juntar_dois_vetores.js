import { displayMessage, getNumber, newArray } from '../utilities.js'

function main() {
    const length = getNumber('Digite o tamanho dos vetores: ')
    const array1 = newArray(length)
    const array2 = newArray(length)

    displayMessage('\nVetor A:')
    for (let i = 0; i < length; i++) {
        array1[i] = getNumber(`Digite o número na posição [${i+1}]: `)
    }

    displayMessage('\nVetor B:')
    for (let i = 0; i < length; i++) {
        array2[i] = getNumber(`Digite o número na posição [${i+1}]: `)
    }

    const joinedArrays = joinArrays(array1, array2)

    displayMessage(`\nVetor C: (${joinedArrays})`)
}


function joinArrays(array1, array2) {
    const length = array1.length*2
    const array3 = newArray(length)

    let j = 0

    for (let i = 0; i < length; i++) {
        if (i < array1.length) {
            array3[i] = array1[i]
        } else {
            array3[i] = array2[j]
            j++
        }
        
    }

    return array3
}


main()