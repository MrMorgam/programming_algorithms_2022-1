import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const firstTerm = Number(input('Digite o primeiro termo da sequência aritimética: '))
    const limitNumber = Number(input('Digite o limite da sequência aritimética: '))
    const ratioBetweenTerms = Number(input('Digite a razão da sequência aritimética: '))

    const geometricProgression = calc_geometric_progression(firstTerm, ratioBetweenTerms, limitNumber)

    console.log(`PG: ${geometricProgression}`)
}

function calc_geometric_progression(firstTerm, ratioBetweenTerms, limitNumber) {
    let geometricProgression = `${firstTerm}`
    let term = firstTerm
    
    while ((limitNumber/ term) > ratioBetweenTerms) {
        term = term * ratioBetweenTerms
        geometricProgression += ` ${term}`
    }

    return geometricProgression
}

main()