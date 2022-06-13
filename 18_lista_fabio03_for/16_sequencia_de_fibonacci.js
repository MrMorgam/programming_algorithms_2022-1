import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 2: '))

    const fibonacciSeries = fibonacciSeriesNTimes(number)

    console.log(`${fibonacciSeries}`)
}

function fibonacciSeriesNTimes(number) {
    let penultimateNumber = 0
    let lastNumber = 1
    let fibonacciSeries = `${penultimateNumber}, ${lastNumber}`

    for (let i = 2; i < number; i++) {
        lastNumber += penultimateNumber
        penultimateNumber = lastNumber - penultimateNumber
        fibonacciSeries += `, ${lastNumber}`
    }

    return fibonacciSeries
}

main()