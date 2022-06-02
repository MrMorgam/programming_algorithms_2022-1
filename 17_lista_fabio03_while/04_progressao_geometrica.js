import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const firstTerm = Number(input('Digite o primeiro termo: '))
    const limitNumber = Number(input('Digite o limite: '))
    const ratioBetweenTerms = Number(input('Digite a razão: '))

    const geometricProgression = geometric_progression(firstTerm, ratioBetweenTerms, limitNumber)

    console.log(`PG: ${geometricProgression}`)
}

function geometric_progression(firstTerm, ratioBetweenTerms, limitNumber) {
    let geometricProgression = `${firstTerm}`
    let term = firstTerm
    
    while ((limitNumber/ term) > ratioBetweenTerms) {
        term = term * ratioBetweenTerms
        geometricProgression += ` ${term}`
    }

    return geometricProgression
}

main()