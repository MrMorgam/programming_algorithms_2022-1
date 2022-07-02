import { displayMessage, getNumber, newArray } from '../utilities.js'

function main() {
    const n = getNumber('Digite a quantidade de termos da sequência de Fibonacci: ')

    const fibonacciSeries = fibonacciSeriesWithNTerms(n)

    displayMessage(`${n} primeiros termos da sequência de fibonacci: ${fibonacciSeries}`)
}


function fibonacciSeriesWithNTerms(n) {
    const fibonacciSeries = newArray()
    fibonacciSeries[0] = 0
    fibonacciSeries[1] = 1

    let penultimateTerm = 0
    let lastTerm = 1
    let aux = 0

    for (let i = 2; i < n; i++) {
        fibonacciSeries[i] = penultimateTerm + lastTerm
        aux = lastTerm
        lastTerm = fibonacciSeries[i]
        penultimateTerm = aux
    }

    return fibonacciSeries
}


main()