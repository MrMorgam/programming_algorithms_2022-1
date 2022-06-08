import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número: '))

    const greaterSquare = greaterSquareLessOrEqualToNumber(number)

    console.log(`Maior quadrado menor que ${number}: ${greaterSquare}`)
}

function greaterSquareLessOrEqualToNumber(number) {
    let i = 0
    let square = 0
    let greaterSquare = 0

    while (i < number) {
        square = i ** 2

        if (square <= number) {
            greaterSquare = square
        }
    
        i++
    }

    return greaterSquare
}

main()