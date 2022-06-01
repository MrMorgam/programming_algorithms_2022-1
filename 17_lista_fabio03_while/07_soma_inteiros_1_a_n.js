import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 1: '))

    const sum = sum_integers_1_to_n(number)

    console.log(`Soma dos números inteiros de 1 a ${number}: ${sum}`)
}

function sum_integers_1_to_n(number) {
    let sum = number
    number--

    while (number >= 1) {
        sum += number
        number--
    }

    return sum
}

main()