import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const number = input('Digite um número inteiro: ')

    const numberOfDigitis = countDigits(number)
    
    console.log(`Número de dígitos: ${numberOfDigitis}`)
}

function countDigits(number) {
    let i = 0
    let digitCounter = 0

    while (i < number.length) {
        digitCounter++
        i++
    }


    return digitCounter
}

main()