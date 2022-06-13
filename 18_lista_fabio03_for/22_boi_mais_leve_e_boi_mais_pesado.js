import prompt from "prompt-sync"
const input = prompt()

function main() {
    const tokens = Number(input('Digite a quantidade de fichas: '))

    const idNumbers = new Array(tokens)
    const names = new Array(tokens)
    const weights = new Array(tokens)

    for (let i = 0; i < tokens; i++) {
        console.log(`\nBoi ${i+1}:`)
        idNumbers[i] = Number(input(`Digite o número de identificação: `))
        names[i] = input(`Digite o nome: `)
        weights[i] = Number(input(`Digite o peso (em kg): `))
    }

    const indexHeaviestOx = findHeaviestOx(weights)
    const indexLighterOx = findLightestOx(weights)

    const heaviestOxIdNumber = idNumbers[indexHeaviestOx]
    const heaviestOxName = names[indexHeaviestOx]
    const heaviestOxWeight = weights[indexHeaviestOx]

    const lightestOxIdNumber = idNumbers[indexLighterOx]
    const lightestOxName = names[indexLighterOx]
    const lightestOxWeight = weights[indexLighterOx]

    console.log(`Boi mais pesado: ${heaviestOxIdNumber} | ${heaviestOxName} | ${heaviestOxWeight} kg`)
    console.log(`Boi mais leve: ${lightestOxIdNumber} | ${lightestOxName} | ${lightestOxWeight} kg`)

}

function findHeaviestOx(arrayOfWeights) {
    let heaviestOx = arrayOfWeights[0]
    let indexHeaviestOx = 0

    for (let i = 0; i < arrayOfWeights.length; i++) {
        if (arrayOfWeights[i] > heaviestOx) {
            heaviestOx = arrayOfWeights[i]
            indexHeaviestOx = i
        }
    }

    return indexHeaviestOx
}

function findLightestOx(arrayOfWeights) {
    let lightestOx = arrayOfWeights[0]
    let indexLightestOx = 0

    for (let i = 0; i < arrayOfWeights.length; i++) {
        if (arrayOfWeights[i] < lightestOx) {
            lightestOx = arrayOfWeights[i]
            indexLightestOx = i
        }
    }

    return indexLightestOx
}

main()