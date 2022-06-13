import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const lowerLimit = Number(input('Digite um número inteiro para o limite inferior: '))
    const upperLimit = Number(input('Digite um número inteiro para o limite superior: '))

    const oddNumbers = multiplesInRange(upperLimit, lowerLimit)

    console.log(`Lista de números pares entre ${lowerLimit} e ${upperLimit}:${oddNumbers}`)
}

function multiplesInRange(upperLimit, lowerLimit) {
    let oddNumbers = ''
    
    for (let number = lowerLimit; number <= upperLimit; number++) {    
        if (!isEven(number)) {
            oddNumbers += ` ${number}`
        }
    }
    
    if(oddNumbers === '') {
        return ' nenhum'
    } else {
        return oddNumbers
    }

}

function isEven(number) {
    return number % 2 === 0
}

main()