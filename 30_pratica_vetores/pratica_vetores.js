import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.log('##### OPERAÇÕES COM VETORES (ARRAYS) #####')
    
    showFirstMenu()

    let userInput = Number(input('Digite a opção de inicialização: '))

    while (userInput !== 1 && userInput !== 2 && userInput !== 3) {
        console.log('\nOpção inválida!')
        userInput = Number(input('Digite uma opção: '))
    }

    const arrayLength = Number(input('Tamanho do vetor: '))
    
    let array = []

    if (userInput === 1) {
        const minNumber = Number(input('Digite o valor mínimo: '))
        const maxNumber = Number(input('Digit o valor máximo: '))

        array = createArrayAutoFilled(arrayLength, minNumber, maxNumber)

    } else if (userInput === 2) {

        array = createArrayManuallyFilled(arrayLength)

    } else {
        const fileName = input('Digite o nome do arquivo: ')

        array = createArrayFilledWithFile(fileName)

    }

    showSecondMenu()

    userInput = Number(input('Digite uma opção: '))

    while (userInput !== 0) {
        
        if (userInput === 1) {
            
            showElementsOfAnArray(array)

        } else if (userInput === 2) {
            const standardValue = Number(input('Digite o valor padrão que irá substituir todos os valores dentro do vetor: '))

            array = resetArray(array, standardValue)

        } else if (userInput === 3) {
            
            showNumberOfElementsInAnArray(array)

        } else if (userInput === 4) {
            
            showGreaterNumberAndItsPositions(array)
            showSmallerNumberAndItsPositions(array)

        } else if (userInput === 5) {
            const average = averageOfElementsOfAnArray(array)

            console.log(`Média dos valores: ${average}`)

        } else if (userInput === 6) {
            const sum = sumOfElementsOfAnArray(array)

            console.log(`Soma dos valores: ${sum}`)

        } else if (userInput === 7) {
            
            showPositiveNumbersAndTheirQuantity(array) 

        } else if (userInput === 8) {
            
            showNegativeNumbersAndTheirQuantity(array)

        } else if (userInput === 9) {
            showThirdMenu()
            
            mapArray(array, operation)


        } else if (userInput === 10) {
            
        } else if (userInput === 11) {
            
        } else if (userInput === 12) {
            
        } else if (userInput === 13) {
            
        } else if (userInput === 14) {
            
        } else {
            
        }

        input('Digite <ENTER> para continuar')
        console.clear()
        showSecondMenu()
        userInput = Number(input('Digite uma opção: '))
    }

    
}


function showFirstMenu() {
    let menu = '\nOpções:\n'
    menu += '\n1 - criar vetor com dados automáticos'
    menu += '\n2 - criar vetor com determindados valores'
    menu += '\n3 - criar vetor com dados de arquivo\n'

    console.log(menu)
}


function showSecondMenu() {
    let menu = '\nOpções:\n'
    menu += '\n1 - mostrar todos os valores do vetor'
    menu += '\n2 - resetar vetor (com valor padrão)'
    menu += '\n3 - mostrar quantidades de itens do vetor'
    menu += '\n4 - mostrar maior e menor valores e suas respectivas posições'
    menu += '\n5 - mostrar média dos valores'
    menu += '\n6 - mostrar somatório dos valores'
    menu += '\n7 - mostrar valores positivos e a quantidade'
    menu += '\n8 - mostrar valores negativos e a quantidade'
    menu += '\n9 - atualizar valores seguindo regras'
    menu += '\n10 - adicionar novos valores'
    menu += '\n11 - remover itens por valor exato'
    menu += '\n12 - remover item em posição'
    menu += '\n13 - editar valor específico em posição'
    menu += '\n14 - salvar valores em arquivo'
    menu += '\n\n0 - sair\n'

    console.log(menu)
}


function createArrayAutoFilled(arrayLength, minNumber, maxNumber) {
    const array = new Array(arrayLength)

    for (let i = 0; i < arrayLength; i++) {
        array[i] = randomNumberInRange(minNumber, maxNumber)
    }

    return array
}


function createArrayManuallyFilled(arrayLength) {
    const array = new Array(arrayLength)

    for (let i = 0; i < arrayLength; i++) {
        array[i] = Number(input(`Digite o valor para a posição ${i+1}: `))
    }

    return array
}


function createArrayFilledWithFile(fileName) {
    const array = fs.readFileSync(fileName, 'utf-8').split('\n')

    return array
}


function showElementsOfAnArray(array) {
    console.log(array)
}


function resetArray(array, standardValue = 1) {
    let newArray = new Array (array.length)

    for (let i = 0; i < array.length; i++) {
        newArray[i] = standardValue
    }

    return newArray
}


function showNumberOfElementsInAnArray(array) {
    console.log(`Número de elementos no vetor: ${array.length}`)
}


function showGreaterNumberAndItsPositions(array) {
    let greaterNumber = array[0]
    let greaterNumberPosition = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > greaterNumber) {
            greaterNumber = array[i]
            greaterNumberPosition = i+1
        }
    }

    console.log(`Maior número: ${greaterNumber} (Posição: ${greaterNumberPosition}º)`)
}


function showSmallerNumberAndItsPositions(array) {
    let smallerNumber = array[0]
    let smallerNumberPosition = 1

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallerNumber) {
            smallerNumber = array[i]
            smallerNumberPosition = i+1
        }
    }

    console.log(`Menor número: ${smallerNumber} (Posição: ${smallerNumberPosition}º)`)
}


function averageOfElementsOfAnArray(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum / array.length
}


function sumOfElementsOfAnArray(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum
}


function showPositiveNumbersAndTheirQuantity(array) {
    let arrayPositiveNumbers = []
    let arrayPositionsPositiveNumbers = []
    let j = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            arrayPositiveNumbers[j] = array[i]
            arrayPositionsPositiveNumbers[j] = i+1
            j++
        }
    }

    console.log(`Números positivos: ${arrayPositiveNumbers}`)
    console.log(`Posições: ${arrayPositionsPositiveNumbers}`)
}


function showNegativeNumbersAndTheirQuantity(array) {
    let arrayNegativeNumbers = []
    let arrayPositionsNegativeNumbers = []
    let j = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            arrayNegativeNumbers[j] = array[i]
            arrayPositionsNegativeNumbers[j] = i+1
            j++
        }
    }

    console.log(`Números positivos: ${arrayNegativeNumbers}`)
    console.log(`Posições: ${arrayPositionsNegativeNumbers}`)
}


function randomNumberInRange(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
}


function mapArray(array, operation) {
    for (let i = 0; i < array.length; i++) {
        array[i] = operation(array[i])
    }

    return array
}


main()