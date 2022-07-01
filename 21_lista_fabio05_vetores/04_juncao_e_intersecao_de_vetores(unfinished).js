import { getNumber, displayMessage, newArray } from '../utilities.js'

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

    const arrayUnion = arrayUnionRepresentation(array1, array2)
    const arrayIntersection = arrayIntersectionRepresentation(array1, array2)

    displayMessage(`\nVetor união entre A e B: (${arrayUnion})`)
    displayMessage(`Vetor interseção entre A e B: (${arrayIntersection})`)
}


function arrayUnionRepresentation(array1, array2) { // ERROR
    const length = array1.length
    const array3 = newArray()

    let k = 0

    for (let i = 0; i < length; i++) {
        array3[k] = array1[i]
        k++
    }

    k = length

    let isUnique = false

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array2[i] === array1[j]) {
                isUnique = false
                break
            }   
        }
        
        if (isUnique) {
            array3[k] = array2[i]
            k++
        }
    }

    return array3
}

function arrayIntersectionRepresentation(array1, array2) {
    const length = array1.length
    const array3 = newArray()

    let k = 0

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array1[i] === array2[j]) {
                array3[k] = array1[i]
                k++
            }
        }
    }

    return array3
}


main()