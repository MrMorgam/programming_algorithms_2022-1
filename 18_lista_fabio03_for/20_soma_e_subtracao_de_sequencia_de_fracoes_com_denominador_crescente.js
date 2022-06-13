import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 0: '))

    const fractionSeries = seriesOfFractions(number)

    console.log(`S = ${fractionSeries}`)
}

function seriesOfFractions(number) {
    let fractionSeries = 0

    for (let i = 1; i <= number;  i++) {
        if (!isEven(i)) {
            fractionSeries += 1 / i
        } else {
            fractionSeries -= 1 / i
        }
    }
    
    return  fractionSeries
}

function isEven(number) {
    return number % 2 === 0
}

main()