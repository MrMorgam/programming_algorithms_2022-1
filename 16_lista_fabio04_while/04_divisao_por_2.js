import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const number = Number(input('Digite um número inteiro: '))

    const lastNumber = divideBy2UntilLessThan1(number)

    console.log(lastNumber)
}

function divideBy2UntilLessThan1(number) {
    let division = number

    while (division >= 1) {
        division /= 2
    }

    return division
}

main()