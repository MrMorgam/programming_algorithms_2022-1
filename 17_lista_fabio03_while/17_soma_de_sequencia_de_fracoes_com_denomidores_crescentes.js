import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 0: '))

    const sumFractions = sumOfFractions(number)

    console.log(`S = ${sumFractions}`)
}

function sumOfFractions(number) {
    let i = 1
    let fractionsSum = 1 / i
    let sumString = `S = 1/${i}`
    i++

    while (i <= number) {
        fractionsSum += 1 / i
        sumString += ` + 1/${i}`
        i++
    }
    
    console.log(sumString)
    return  fractionsSum
}

main()