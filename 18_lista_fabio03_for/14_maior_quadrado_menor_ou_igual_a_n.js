import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro positivo: '))

    const greaterSquare = greaterSquareLessOrEqualToNumber(number)

    console.log(`Maior quadrado menor que ${number}: ${greaterSquare}`)
}

function greaterSquareLessOrEqualToNumber(number) {
    let square = 0
    let greaterSquare = 0

    for (let i = 0; i < number; i++) {
        square = i ** 2

        if (square <= number) {
            greaterSquare = square
        }
    }

    return greaterSquare
}

main()