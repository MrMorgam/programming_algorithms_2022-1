import { displayMessage, getNumber, newArray } from '../utilities.js'

function main() {
    const length = getNumber('Digite o tamanho do vetor: ')
    const array = newArray(length)

    for (let i = 0; i < length; i++) {
        array[i] = getNumber(`Digite o número na posição [${i+1}]: `)
    }
    
    const equalElements = thereIsEqualElementsInArray(array)

    if (equalElements) {
        displayMessage(`\nExistem elementos iguais dentro do vetor!`)
    } else {
        displayMessage('\nNão existem elementos iguais dentro do vetor!')
    }
   
}


function thereIsEqualElementsInArray(array) {
    let aux = 0

    for (let i = 0; i < array.length; i++) {
        aux = array[i]
        for (let j = 0; j < array.length; j++) {
            if (aux === array[j] && !(i === j)) {
                return true
            }
        }
    }

    return false
}


main()