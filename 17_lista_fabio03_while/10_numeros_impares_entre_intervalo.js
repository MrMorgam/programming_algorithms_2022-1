import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const lowerLimit = Number(input('Digite um número inteiro para o limite inferior: '))
    const upperLimit = Number(input('Digite um número inteiro para o limite superior: '))

    const oddNumbers = multiples_of_a_number_in_range(upperLimit, lowerLimit)

    console.log(`Lista de números pares entre ${lowerLimit} e ${upperLimit}:${oddNumbers}`)
}

function multiples_of_a_number_in_range(upperLimit, lowerLimit) {
    let number = lowerLimit
    let oddNumbers = ''
    
    while (number <= upperLimit) {    
        if (!is_even(number)) {
            oddNumbers += ` ${number}`
        }

        number++
    }
    
    if(oddNumbers === '') {
        return ' nenhum'
    } else {
        return oddNumbers
    }
}

function is_even(number) {
    return number % 2 === 0
}

main()