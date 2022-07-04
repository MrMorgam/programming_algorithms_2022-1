import { displayText, 
    generateRandomNumber, 
    inputNumber, 
    inputNumberInRange, 
    inputPositiveNumber, 
    inputString } from './utils.js'
import { createArray } from './vetor_utils.js'

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
    menu += '\n10 - Atualizar os valores do vetor seguindo um regra'
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

    } else if (option === 3) { // Unfinished
        
        displayText('\nOpção inacabada! Por favor, aguarde novas versões...')

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