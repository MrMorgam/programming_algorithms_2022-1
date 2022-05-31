import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 1: '))

    const integers = integers_1_to_n(number)

    console.log(`Números inteiros de 1 a ${number}: ${integers}`)
}

function integers_1_to_n(number) {
    let integers = `${number}`
    number--

    while (number >= 1) {
        integers += ` ${number}`
        number--
    }

    return integers
}

main()