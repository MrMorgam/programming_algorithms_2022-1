import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const lowerLimit = Number(input('Digite um número inteiro para o limite inferior: '))
    const upperLimit = Number(input('Digite um número inteiro para o limite superior: '))

    const evenNumbers = multiplesinRange(upperLimit, lowerLimit)

    console.log(`Lista de números pares entre ${lowerLimit} e ${upperLimit}:${evenNumbers}`)
}

function multiplesinRange(upperLimit, lowerLimit) {
    let evenNumbers = ''
    
    for (let number = lowerLimit; number <= upperLimit; number++) {    
        if (isEven(number)) {
            evenNumbers += ` ${number}`
        }
    }
    
    if(evenNumbers === '') {
        return ' nenhum'
    } else {
        return evenNumbers
    }
    
}

function isEven(number) {
    return number % 2 === 0
}

main()