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
    let term = firstTerm
    
    while (term < limitNumber) {
        arithmeticProgression += ` ${term}`
        term += differenceBetweenTerms
    }

    return arithmeticProgression
}

main()