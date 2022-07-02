import { displayMessage, getNumber, newArray } from '../utilities.js'

function main() {
    const length = getNumber('Digite a quantidade de elementos do vetor: ')
    
    const array = newArray(length)

    for (let i = 0; i < length; i++) {
        array[i] = getNumber(`Digite o ${i+1}º elemento: `)
    }

    let orderedArray = newArray(length)
    orderedArray = sortArrayCrescentOrder(array)

    displayMessage(orderedArray)
}


function sortArrayCrescentOrder(array) {
    let aux = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }

    return array;
}


main()