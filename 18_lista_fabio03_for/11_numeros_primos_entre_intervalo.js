import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const lowerLimit = Number(input('Digite um número inteiro para o limite inferior: '))
    const upperLimit = Number(input('Digite um número inteiro para o limite superior: '))

    const primeNumbers = primeNumbersInRange(upperLimit, lowerLimit)

    console.log(`Lista de números primos entre ${lowerLimit} e ${upperLimit}:${primeNumbers}`)
}

function primeNumbersInRange(upperLimit, lowerLimit) {
    let number = lowerLimit
    let primeNumbers = ''
    
    while (number <= upperLimit) {    
        if (isPrime(number)) {
            primeNumbers += ` ${number}`
        }

        number++
    }
    
    if (primeNumbers === '') {
        return ' nenhum'
    } else {
        return primeNumbers
    }
}

function isPrime(number) {
    let i = 2

    if (number <= 1) {
        return false
    } else {
        for (; i < number; i++) {
            if (number % i === 0) {
                return false
            }
        }

        return true
    }
}

main()