import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 0: '))

    const sumFractions = sumOfFractions(number)

    console.log(`S = ${sumFractions}`)
}

function sumOfFractions(number) {
    let fractionsSum = 0

    for (let i = 1; i <= number; i++) {
        fractionsSum += 1 / i
        i++
    }
    
    return  fractionsSum
}

main()