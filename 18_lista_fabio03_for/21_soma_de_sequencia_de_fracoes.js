import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 0: '))

    const fractionsSum = sumOfFractions(number)

    console.log(`S = ${fractionsSum}`)
}

function sumOfFractions(number) {
    let numerator = 1
    let seriesFractions = 0

    for (let denominator = 1; denominator <= number; denominator++) {
        seriesFractions += numerator / denominator
        numerator += 2
    }
    
    return  seriesFractions
}

main()