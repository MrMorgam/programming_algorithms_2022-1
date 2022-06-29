import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const number1 = Number(input('Digite um número inteiro: '))
    const number2 = Number(input('Digite outro número inteiro: '))

    let lcm = number2 // Least common multiple

    while (!(isMultiple(lcm, number1) && isMultiple(lcm, number2))) {
       lcm += number2
    }

    console.log(`mmc(${number1}, ${number2}) = ${lcm}`)
}


function isMultiple(number1, number2) {
    return number1 % number2 === 0
}


main()