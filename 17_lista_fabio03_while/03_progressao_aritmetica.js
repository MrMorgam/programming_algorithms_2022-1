import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const firstTerm = Number(input('Digite o primeiro termo da sequência aritimética: '))
    const limitNumber = Number(input('Digite o limite da sequência aritimética: '))
    const differenceBetweenTerms = Number(input('Digite a razão da sequência aritimética: '))

    const arithmeticProgression = arithmeticProgression(firstTerm, differenceBetweenTerms, limitNumber)

    console.log(`PA: ${arithmeticProgression}`)
}

function arithmeticProgression(firstTerm, differenceBetweenTerms, limitNumber) {
    let arithmeticProgression = `${firstTerm}`
    let term = firstTerm
    
    while ((limitNumber - term) > differenceBetweenTerms) {
        term += differenceBetweenTerms
        arithmeticProgression += ` ${term}`
    }

    return arithmeticProgression
}

main()