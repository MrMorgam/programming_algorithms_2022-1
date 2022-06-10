import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número: '))

    const sum = sumAllNumbers1ToN(number)

    console.log(`A soma dos números inteiros de 1 a ${number} é: ${sum}`)
}

function sumAllNumbers1ToN(n) {
    let sum = 0
    
    for (let i = 0; i <= n; i++) {
        sum += i
    }

    return sum
}

main()