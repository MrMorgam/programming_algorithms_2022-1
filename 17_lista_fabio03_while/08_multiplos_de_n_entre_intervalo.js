import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro: '))
    const lowerLimit = Number(input('Digite um número inteiro para o limite inferior: '))
    const upperLimit = Number(input('Digite um número inteiro para o limite superior: '))

    const multiples = multiples_of_a_number_in_range(number, upperLimit, lowerLimit)

    console.log(`Lista de números múltiplos de ${number} entre ${lowerLimit} e ${upperLimit}:${multiples}`)
}

function multiples_of_a_number_in_range(number, upperLimit, lowerLimit) {
    let multipleNumber = lowerLimit
    let multiples = ''
    
    while (multipleNumber <= upperLimit) {    
        if (is_multiple(multipleNumber, number)) {
            multiples += ` ${multipleNumber}`
        }

        multipleNumber++
    }
    
    if(multiples === '') {
        return ' nenhum'
    } else {
        return multiples
    }
}

function is_multiple(number1, number2) {
    return number1 % number2 === 0
}

main()