import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 0: '))

    const sumFractions = sumOfFractions(number)

    console.log(`S = ${sumFractions}`)
}

function sumOfFractions(number) {
    let i = number
    let fractionsSum = 1 / i
    let sumString = `S = 1/${i}`
    i--

    while (i >= 1) {
        fractionsSum += 1 / i
        sumString += ` + 1/${i}`
        i--
    }
    
    console.log(sumString)
    return  fractionsSum
}

main()