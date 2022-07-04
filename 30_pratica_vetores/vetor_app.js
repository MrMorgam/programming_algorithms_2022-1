import { displayText, inputNumberInRange, inputNumber } from './utils.js'
import { displayMenu, 
    enterToContinue, 
    createArrayWithInput, 
    menuOption1, 
    resetArray, 
    countElementInArray } from './vetor_funcionalidades.js'
import { createArray, displayArray } from './vetor_utils.js'


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
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        } else if (option === 6) {
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        } else if (option === 7) {
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        } else if (option === 8) {
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        } else if (option === 9) {
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        } else if (option === 10) {
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        } else if (option === 11) {
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        } else if (option === 12) {
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        } else if (option === 13) {
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        } else if (option === 14) {
            displayText('\nOpção inacabada! Por favor, aguarde novas versões...')
        }
    
        enterToContinue()
        displayMenu()
        option = inputNumberInRange('Digite uma opção: ', 0, 14, 'Número de opção inválido! Digite uma opção: ')
    }

    console.clear()
}


main()