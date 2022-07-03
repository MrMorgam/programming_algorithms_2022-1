import { inputNumber, inputPositiveNumber } from './utils.js'
import { addElementArray, createArray, displayArray, filterArray, mapArray, removeElementArray } from './vetor_utils.js'

function main() {
    const length = inputPositiveNumber('Digite o tamanho dos vetores: ')

    let mappedArray = createArray(length)
    let filteredArray = createArray(length)
    const array = createArray(length)

    let userInput = 0

    for (let i = 0; i < length; i++) {
        userInput = inputNumber(`Digite um número para a posição [${i+1}]:`)
        mappedArray[i] = userInput
        filteredArray[i] = userInput
        array[i] = userInput
    }

    mappedArray = mapArray(mappedArray, number => 2 * number)
    filteredArray = filterArray(filteredArray, number => number % 2 === 0)

    displayArray(`\nVetor original: (${array})`)
    displayArray(`Map: (${mappedArray})`)
    displayArray(`Filter: (${filteredArray})`)

    const increasedArray = addElementArray(array, 3, 4)
    const decreasedArray = removeElementArray(array, 2)

    displayArray(`\nAdicionar elemento ao vetor: ${increasedArray}`)
    displayArray(`\nRemover elemento do vetor: ${decreasedArray}`)

}


main()