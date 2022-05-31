import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number = Number(input('Digite um número inteiro maior que 1: '))

    const evenIntegers = even_integers_1_to_n(number)

    console.log(`Números inteiros pares de 1 a ${number}: ${evenIntegers}`)
}

function even_integers_1_to_n(number) {
    let evenIntegers 
    
    if (is_even(number)) {
        evenIntegers = `${number}`
        number--
    } else {
        evenIntegers = `${number - 1}`
        number -= 2
    }


    while (number >= 1) {
        if (is_even(number)) {
            evenIntegers += ` ${number}`
        }

        number--
    }

    return evenIntegers
}

function is_even(number) {
    return (number % 2 === 0)
}

main()