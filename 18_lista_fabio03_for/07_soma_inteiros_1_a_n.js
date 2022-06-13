import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 1: '))

    const sum = sumIntegersInRange(number)

    console.log(`Soma dos números inteiros de 1 a ${number}: ${sum}`)
}

function sumIntegersInRange(number) {
    let sum = 0
    
    for (let i = 0; i <= number; i++) {
        sum += i
    }

    return sum
}

main()