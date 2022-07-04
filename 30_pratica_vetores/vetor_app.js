import { displayText, inputNumberInRange, inputNumber, inputString } from './utils.js'
import { displayMenu, 
    enterToContinue, 
    createArrayWithInput, 
    menuOption1, 
    resetArray, 
    countElementInArray,
    findGreatestValueAndItsPositionInArray,
    findSmallestValueAndItsPositionInArray,
    findPositiveValuesAndTheirQuantityInArray,
    findNegativeValuesAndTheirQuantityInArray,
    averageValueOfArray,
    sumOfValuesInArray,
    menuOption10 } from './vetor_funcionalidades.js'
import { addElementArray, createArray, displayArray, mapArray, removeElementArray, removeValueArray } from './vetor_utils.js'


function main() {
    console.clear()

    displayText('####### VETOR APP (v. alpha 1.03) #######\n')
    
    displayMenu()

    let option = inputNumberInRange('Digite uma opção: ', 0, 14, 'Número de opção inválido! Digite uma opção: ')
    
    let array  = createArray()

    while (option !== 0) {

        if (option === 1) {
            
            console.clear()
            menuOption1()
    
            let option1 = inputNumberInRange('Digite uma opção: ', 0, 3, 'Opção inválida! Digite uma opção: ')
            
            if (option1 !== 0) {
                array = createArrayWithInput(option1)
            }
            
        } else if (option === 2) {
            
            displayText(`\nVetor: `)
            displayArray(array)

        } else if (option === 3) {
            
            displayText('')

            const standardValue = inputNumber('Digite um valor padrão para os elementos do vetor: ')

            array = resetArray(array, standardValue)

        } else if (option === 4) {
            
            const elementCount = countElementInArray(array)

            displayText(`\nQuantidade de elementos do vetor: ${elementCount}`)

        } else if (option === 5) {
            
            const [smallestValue, smallestValuePosition] = findSmallestValueAndItsPositionInArray(array)
            
            const [greatestValue, greatestValuePosition] = findGreatestValueAndItsPositionInArray(array)

            displayText(`\nMenor valor: ${smallestValue} (posição: ${smallestValuePosition}º)`)
            displayText(`Maior valor: ${greatestValue} (posição: ${greatestValuePosition}º)`)

        } else if (option === 6) {
            
            const average = averageValueOfArray(array)

            displayText(`\nMédia dos valores: ${average}`)

        } else if (option === 7) {
            
            const sum = sumOfValuesInArray(array)

            displayText(`\nSomatório dos valores: ${sum}`)

        } else if (option === 8) {
            
            const [positiveValues, positiveValuesQuantity] = findPositiveValuesAndTheirQuantityInArray(array)

            displayText('\nValores positivos:')
            displayArray(positiveValues)
            displayText(`\nQuantidade de valores positivos: ${positiveValuesQuantity}`)

        } else if (option === 9) {

            const [negativeValues, negativeValuesQuantity] = findNegativeValuesAndTheirQuantityInArray(array)

            displayText('\nValores negativos:')
            displayArray(negativeValues)
            displayText(`\nQuantidade de valores negativos: ${negativeValuesQuantity}`)

        } else if (option === 10) { // Unfinished

            console.clear()
            menuOption10()
    
            let option10 = inputNumberInRange('Digite uma opção: ', 0, 6, 'Opção inválida! Digite uma opção: ')
            
            if (option10 === 1) {

                displayText('')

                const value = inputNumber('Digite o valor a multiplicar todos os elementos do vetor: ')

                array = mapArray(array, n => n * value)

            } else if (option10 === 2) {
                
                displayText('')

                const value = inputNumber('Digite o valor a qual todos os elementos do vetor serão elevados: ')

                array = mapArray(array, n => n ** value)

            } else if (option10 === 3) { // Unfinished
                
            } else if (option10 === 4) { // Unfinished
                
            } else if (option10 === 5) { // Unfinished
                
            } else if (option10 === 6) { // Unfinished
                
            }

        } else if (option === 11) {

            displayText('')

            const value = inputNumber('Digite o valor a ser adicionado no vetor: ')
            const position = inputNumber('Digite a posição em que o valor deverá ser adicionado: ')

            array = addElementArray(array, value, position)

            displayText(`\nNovo vetor:`)
            displayArray(array)

        } else if (option === 12) {

            displayText('')

            const value = inputNumber('Digite o valor a ser removido do vetor: ')

            array = removeValueArray(array, value)

            displayText(`\nNovo vetor:`)
            displayArray(array)

        } else if (option === 13) {

            displayText('')

            const position = inputNumber('Digite a posição do valor que deverá ser removidos: ')

            array = removeElementArray(array, position)

            displayText(`\nNovo vetor:`)
            displayArray(array)

        } else if (option === 14) { // Unfinished

            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')

        }

    
        enterToContinue()
        displayMenu()
        option = inputNumberInRange('Digite uma opção: ', 0, 14, 'Número de opção inválido! Digite uma opção: ')
    }

    console.clear()
}


main()