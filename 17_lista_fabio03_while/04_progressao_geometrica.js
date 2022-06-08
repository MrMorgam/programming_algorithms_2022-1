import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const firstTerm = Number(input('Digite o primeiro termo: '))
    const limitNumber = Number(input('Digite o limite: '))
    const ratioBetweenTerms = Number(input('Digite a razão: '))

    const geometricProgression = geometricProgression(firstTerm, ratioBetweenTerms, limitNumber)

    console.log(`PG: ${geometricProgression}`)
}

function geometricProgression(firstTerm, ratioBetweenTerms, limitNumber) {
    let geometricProgression = `${firstTerm}`
    let term = firstTerm
    
    while ((limitNumber/ term) > ratioBetweenTerms) {
        term = term * ratioBetweenTerms
        geometricProgression += ` ${term}`
    }

    return geometricProgression
}

main()