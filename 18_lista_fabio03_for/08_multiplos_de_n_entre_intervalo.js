import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro: '))
    const lowerLimit = Number(input('Digite um número inteiro para o limite inferior: '))
    const upperLimit = Number(input('Digite um número inteiro para o limite superior: '))

    const multiples = multiplesInRange(number, upperLimit, lowerLimit)

    console.log(`Lista de números múltiplos de ${number} entre ${lowerLimit} e ${upperLimit}:${multiples}`)
}

function multiplesInRange(number, upperLimit, lowerLimit) {
    let multiples = ''
    
    for (let multipleNumber = lowerLimit; multipleNumber <= upperLimit; multipleNumber++) {    
        if (isMultiple(multipleNumber, number)) {
            multiples += ` ${multipleNumber}`
        }
    }
    
    if(multiples === '') {
        return ' nenhum'
    } else {
        return multiples
    }
    
}

function isMultiple(number1, number2) {
    return number1 % number2 === 0
}

main()