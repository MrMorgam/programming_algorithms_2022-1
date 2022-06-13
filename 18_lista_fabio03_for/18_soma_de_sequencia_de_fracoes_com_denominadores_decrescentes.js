import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 0: '))

    const sumFractions = sumOfFractions(number)

    console.log(`S = ${sumFractions}`)
}

function sumOfFractions(number) {  
    let fractionsSum = 0

    for (let i = number; i >= 1; i--) {
        fractionsSum += 1 / i
    }
    
    return  fractionsSum
}

main()