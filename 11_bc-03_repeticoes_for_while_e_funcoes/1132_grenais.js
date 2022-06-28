import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let inter = []
    let gremio = []
    let grenalResults = []
    
    let i = 0

    grenalResults = input('Digite o resultado do Grenal (INT x GRE): ').split(' ').map(Number)
    inter[i] = grenalResults[0]
    gremio[i] = grenalResults[1]
    console.log(`${inter[i]} x ${gremio[i]}`)
    i++

    let option = Number(input('Novo grenal (1-sim 2-nao)'))
    
    while (option === 1) {
        grenalResults = input('Digite o resultado do Grenal (INT x GRE): ').split(' ').map(Number) 
        inter[i] = grenalResults[0]
        gremio[i] = grenalResults[1]
        console.log(`${inter[i]} x ${gremio[i]}`)
        i++

        option = Number(input('Novo grenal (1-sim 2-nao)'))
    }

    const grenaisPlayed = i
    const interVictories = howManyInterVictories(inter, gremio)
    const gremioVictories = howManyGremioVictories(inter, gremio)
    const draws = howManyDraws(inter, gremio)
    const whoWonMoreTimes = whoWonMore(interVictories, gremioVictories)

    console.log(`${grenaisPlayed} grenais`)
    console.log(`Inter:${interVictories}`)
    console.log(`Gremio:${gremioVictories}`)
    console.log(`Empates:${draws}`)
    console.log(`${whoWonMoreTimes} venceu mais`)
}

function howManyInterVictories(inter, gremio) {
    let i = 0
    let interVictories = 0

    while (i < inter.length) {
        if (inter[i] > gremio[i]) {
            interVictories++
            i++
        } else {
            i++
        }
    }

    return interVictories
}

function howManyGremioVictories(inter, gremio) {
    let i = 0
    let gremioVictories = 0

    while (i < gremio.length) {
        if (gremio[i] > inter[i]) {
            gremioVictories++
            i++
        } else {
            i++
        }
    }

    return gremioVictories
}

function howManyDraws(inter, gremio) {
    let i = 0
    let draws = 0

    while (i < inter.length) {
        if (inter[i] === gremio[i]) {
            draws++
            i++
        } else {
            i++
        }
    }

    return draws
}

function whoWonMore(interVictories, gremioVictories) {
    if (interVictories >= gremioVictories) {
        return 'Inter'
    } else {
        return 'Gremio'
    }

}

main()