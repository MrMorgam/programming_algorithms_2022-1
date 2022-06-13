import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 0: '))

    const fractionsSeries = seriesOfFractions(number)

    console.log(`S = ${fractionsSeries}`)
}

function seriesOfFractions(number) { 
    let increasingNumber = 1
    let decreasingNumber = number
    let seriesFractions = increasingNumber / decreasingNumber

    for (; increasingNumber <= number; increasingNumber++) {
        if (!isEven(increasingNumber)) {
            seriesFractions += increasingNumber / decreasingNumber
            decreasingNumber--
        } else {
            seriesFractions -= decreasingNumber / increasingNumber
            decreasingNumber--
        }
    }
    
    return  seriesFractions
}

function isEven(number) {
    return number % 2 === 0
}

main()