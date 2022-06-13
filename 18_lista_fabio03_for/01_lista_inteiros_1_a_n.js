import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 1: '))

    const integers = integersInRange(1, number)

    console.log(`Números inteiros de 1 a ${number}:${integers}`)
}

function integersInRange(startNumber, endNumber) {
    let listOfIntegers = ''

    for (let i = startNumber; i <= endNumber; i++) { 
        listOfIntegers += ` ${i}`
    }

    return listOfIntegers
}

main()