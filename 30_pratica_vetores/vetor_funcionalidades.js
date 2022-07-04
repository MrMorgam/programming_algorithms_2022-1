import { displayText, 
    generateRandomNumber, 
    inputNumber, 
    inputNumberInRange, 
    inputPositiveNumber, 
    inputString, 
    loadFile } from './utils.js'
import { createArray, mapArray } from './vetor_utils.js'


export function displayMenu() {
    let menu = 'Escolha uma da opções:\n'
    menu += '\n1 - Inicializar um vetor numérico'
    menu += '\n2 - Mostrar todos os valores contidos no vetor'
    menu += '\n3 - Resetar vetor'
    menu += '\n4 - Mostrar a quantidade de itens existentes no vetor'
    menu += '\n5 - Mostrar maior e menor valores e suas respectivas posições'
    menu += '\n6 - Mostrar a média dos valores contidos no vetor'
    menu += '\n7 - Mostrar o somatório dos valores contidos no vetor'
    menu += '\n8 - Mostrar valores positivos contidos no vetor'
    menu += '\n9 - Mostrar valores negativos contidos no vetor'
    menu += '\n10 - Atualizar os valores do vetor seguindo uma regra'
    menu += '\n11 - Adicionar novos valores ao vetor'
    menu += '\n12 - Remover item por valor exato'
    menu += '\n13 - Remover item por posição'
    menu += '\n14 - Salvar valores'
    menu += '\n\n0 - Sair\n'

    displayText(menu)
}


export function enterToContinue() {
    inputString('\nPrecione <Enter> para continuar...')
    console.clear()
}


export function menuOption1() {
    let menu ='Escolha uma da opções: \n'
    menu += '\n1 - Criar vetor com dados automáticos (números aleatórios)'
    menu += '\n2 - Criar vetor com dados inseridos manualmente'
    menu += '\n3 - Criar vetor com dados carregados de arquivo'
    menu += '\n\n0 - Sair\n'

    displayText(menu)
}


export function createArrayWithInput(option) {
    displayText('')

    const length = inputPositiveNumber('Digite o tamanho do vetor: ')
    const min = inputNumber('Digite um valor mínimo: ')
    const max = inputNumber('Digite um valor máximo: ')
    
    let array = createArray(length)

    if (option === 1) {

        for (let i = 0; i < length; i++) {
            array[i] = generateRandomNumber(min, max)
        }

    } else if (option === 2) {
        displayText('')

        for (let i = 0; i < length; i++) {
            array[i] = inputNumberInRange(`Digite um núemro para a posição [${i+1}]: `, min, max)
        }

    } else if (option === 3) {
        displayText('')

        const fileName = inputString('Digite o nome do arquivo: ')

        array = loadFile(fileName).split('\n')
        array = mapArray(array, element => Number(element))

    }

    return array
}


export function resetArray(array, standardValue = 1) {
    for (let i = 0; i < array.length; i++) {
        array[i] = standardValue
    }

    return array
}


export function countElementInArray(array) {
    let counter = 0

    for (let i = 0; i < array.length; i++) {
        counter++
    }

    return counter
}


export function findGreatestValueAndItsPositionInArray(array) {
    let greatestValue = array[1]
    let greatestValuePosition = 1
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > greatestValue) {
            greatestValue = array[i]
            greatestValuePosition = i + 1
        }
    }

    return [greatestValue, greatestValuePosition]
}


export function findSmallestValueAndItsPositionInArray(array) {
    let smallestValue = array[1]
    let smallestValuePosition = 1
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallestValue) {
            smallestValue = array[i]
            smallestValuePosition = i + 1
        }
    }

    return [smallestValue, smallestValuePosition]
}

export function findPositiveValuesAndTheirQuantityInArray(array) {
    let positiveValues = createArray()
    let positiveValuesQuantity = 0

    let j = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveValues[j] = array[i]
            positiveValuesQuantity++
            
            j++
        }
    }

    return [positiveValues, positiveValuesQuantity]
}


export function findNegativeValuesAndTheirQuantityInArray(array) {
    let negativeValues = createArray()
    let negativeValuesQuantity = 0

    let j = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeValues[j] = array[i]
            negativeValuesQuantity++
            
            j++
        }
    }

    return [negativeValues, negativeValuesQuantity]
}


export function averageValueOfArray(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    const average = sum / array.length

    return average
}


export function sumOfValuesInArray(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum
}


export function menuOption10(option) {
    let menu ='Escolha uma da opções: \n'
    menu += '\n1 - Multiplicar por um valor'
    menu += '\n2 - Elevar a um valor'
    menu += '\n3 - Reduzir a uma fração'
    menu += '\n4 - Substituir valores negativos por número aleatório'
    menu += '\n5 - Ordenar valores'
    menu += '\n6 - Embaralhar valores'
    menu += '\n\n0 - Sair\n'

    displayText(menu)
}