import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 1: '))

    const sequenceofNumbers = numberSequence(number)

    console.log(`(${sequenceofNumbers})`)
}

function numberSequence(number) {
    let numberOfSequence = 1
    let numberSequence = `${numberOfSequence}`

    for (let i = 1; i < number; i++) {
        numberOfSequence += i+1
        numberSequence += `, ${numberOfSequence}`
    }

    return numberSequence
}

main()