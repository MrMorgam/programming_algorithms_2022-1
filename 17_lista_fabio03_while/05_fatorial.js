import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número: '))

    const factorial = calc_factorial(number)

    console.log(`${number}! = ${factorial}`)
}

function calc_factorial(number) {
    let factorial = 0

    while (number >= 1){
        factorial = factorial * number
        number--
    }
}

main()