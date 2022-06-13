import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número: '))

    const factorial = calcFactorial(number)

    console.log(`${number}! = ${factorial}`)
}

function calcFactorial(number) {
    if (number === 0) {
        return 1
    } else {
        let factorial = 1

        for (let i = number; i > 1; i--) {
            factorial *= i
        }

        return factorial
    }
}

main()