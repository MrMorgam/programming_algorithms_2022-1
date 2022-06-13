import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const firstTerm = Number(input('Digite o primeiro termo: '))
    const limitNumber = Number(input('Digite o limite: '))
    const differenceBetweenTerms = Number(input('Digite a razão: '))

    const arithmeticProgression = numbersOfAnArithmeticProgression(firstTerm, differenceBetweenTerms, limitNumber)

    console.log(`PA:${arithmeticProgression}`)
}

function numbersOfAnArithmeticProgression(firstTerm, differenceBetweenTerms, limitNumber) {
    let arithmeticProgression = ''
    
    for (let term = firstTerm; term < limitNumber; term += differenceBetweenTerms) {
        arithmeticProgression += ` ${term}`
    }

    return arithmeticProgression
}

main()