import { displayMessage, getNumber, newArray } from '../utilities.js'

function main() {
    const length = getNumber('Digite o tamanho do vetor: ')

    const array = newArray(length)

    for (let i = 0; i < length; i++) {
        array[i] = getNumber(`Digite o valor do ${i+1}º elemento: `)
    }

    const [greaterElement, greaterElementPosition] = findGreaterElementAndItsPositionInArray(array)
    const [smallerElement, smallerElementPosition] = findSmallerElementAndItsPositionInArray(array)

    displayMessage(`\nMaior elemento: ${greaterElement}`)
    displayMessage(`Poisção: ${greaterElementPosition}`)
    displayMessage(`\nMenor elemento: ${smallerElement}`)
    displayMessage(`Poisção: ${smallerElementPosition}`)
}


function findGreaterElementAndItsPositionInArray(array) {
    let greaterElement = array[0]
    let greaterElementPosition = 1

    for (let i = 1; i < array.length; i++) {
        if (array[i] > greaterElement) {
            greaterElement = array[i]
            greaterElementPosition = i + 1
        }
    }

    return [greaterElement, greaterElementPosition]
}


function findSmallerElementAndItsPositionInArray(array) {
    let smallerElement = array[0]
    let smallerElementPosition = 1

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallerElement) {
            smallerElement = array[i]
            smallerElementPosition = i + 1
        }
    }

    return [smallerElement, smallerElementPosition]
}


main()