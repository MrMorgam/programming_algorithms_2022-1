import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número: '))

    const dividers = dividersOfANumber(number)

    console.log(`Divisores de ${number}: (${dividers})`)
}


function dividersOfANumber(number) {
    let i = 1
    let j = 0
    let dividers = []

    while (i <= number) {
        if (isDivider(number, i)) {
            dividers[j] = i
            j++
        }
        i++
    }

    return dividers
}


function isDivider(number1, number2) {
    return number1 % number2 === 0
}


main()