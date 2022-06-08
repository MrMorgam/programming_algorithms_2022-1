import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 0: '))

    const fractionSeries = seriesOfFractions(number)

    console.log(`S = ${fractionSeries}`)
}

function seriesOfFractions(number) {
    let i = 1
    let fractionSeries = 1 / i
    let seriesString = `S = 1/${i}`
    i++

    while (i <= number) {
        if (!isEven(i)) {
            fractionSeries += 1 / i
            seriesString += ` + 1/${i}`
            i++
        } else {
            fractionSeries -= 1 / i
            seriesString += ` - 1/${i}`
            i++
        }
    }
    
    console.log(seriesString)
    return  fractionSeries
}

function isEven(number) {
    return number % 2 === 0
}

main()