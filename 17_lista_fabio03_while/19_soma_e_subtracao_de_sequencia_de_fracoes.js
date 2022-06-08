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
    let seriesString = `S = ${increasingNumber}/${decreasingNumber}`
    increasingNumber++
    decreasingNumber--

    while (increasingNumber <= number) {
        if (!isEven(increasingNumber)) {
            seriesFractions += increasingNumber / decreasingNumber
            seriesString += ` + ${increasingNumber}/${decreasingNumber}`
            increasingNumber++
            decreasingNumber--
        } else {
            seriesFractions -= decreasingNumber / increasingNumber
            seriesString += ` - ${decreasingNumber}/${increasingNumber}`
            increasingNumber++
            decreasingNumber--
        }
    }
    
    console.log(seriesString)
    return  seriesFractions
}

function isEven(number) {
    return number % 2 === 0
}

main()