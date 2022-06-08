import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 1: '))

    const evenIntegers = evenIntegersInRange(number)

    console.log(`Números inteiros pares de 1 a ${number}: ${evenIntegers}`)
}

function evenIntegersInRange(number) {
    let evenIntegers 
    
    if (isEven(number)) {
        evenIntegers = `${number}`
        number--
    } else {
        evenIntegers = `${number - 1}`
        number -= 2
    }


    while (number >= 1) {
        if (isEven(number)) {
            evenIntegers += ` ${number}`
        }

        number--
    }

    return evenIntegers
}

function isEven(number) {
    return (number % 2 === 0)
}

main()