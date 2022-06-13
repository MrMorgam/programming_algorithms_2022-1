import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const firstTerm = Number(input('Digite o primeiro termo: '))
    const limitNumber = Number(input('Digite o limite: '))
    const ratioBetweenTerms = Number(input('Digite a razão: '))

    const geometricProgression = numbersOfAGeometricProgression(firstTerm, ratioBetweenTerms, limitNumber)

    console.log(`PG:${geometricProgression}`)
}

function numbersOfAGeometricProgression(firstTerm, ratioBetweenTerms, limitNumber) {
    let geometricProgression = ''
    
    for (let term = firstTerm; term < limitNumber; term *= ratioBetweenTerms) {
        geometricProgression += ` ${term}`
    }

    return geometricProgression
}

main()