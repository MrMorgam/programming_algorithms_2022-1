import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 0: '))

    const fractionsSum = sumOfFractions(number)

    console.log(`S = ${fractionsSum}`)
}

function sumOfFractions(number) {
    let numerator = 1
    let denominator = 1
    let seriesFractions = numerator / denominator
    let seriesString = `S = ${numerator}/${denominator}`
    numerator += 2
    denominator++

    while (denominator <= number) {
        seriesFractions += numerator / denominator
        seriesString += ` + ${numerator}/${denominator}`
        numerator += 2
        denominator++
    }
    
    console.log(seriesString)
    return  seriesFractions
}

main()