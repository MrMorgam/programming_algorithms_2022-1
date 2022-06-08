import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número: '))

    const sequenceofNumbers = numberSequence(number)

    console.log(`(${sequenceofNumbers})`)
}

function numberSequence(number) {
    let i = 2
    let penultimateNumber = 0
    let lastNumber = 1
    let fibonacciSeries = `${penultimateNumber}, ${lastNumber}`

    while (i < number) {
        lastNumber += penultimateNumber
        penultimateNumber = lastNumber - penultimateNumber
        fibonacciSeries += `, ${lastNumber}`
        i++
    }

    return fibonacciSeries
}

main()