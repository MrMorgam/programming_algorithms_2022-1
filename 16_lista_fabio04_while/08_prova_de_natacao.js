import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let swimTestNumber = Number(input('Digite o número da prova: '))
    let numberSwimmers = Number(input('Digite a quantidade de nadadores: '))

    while (swimTestNumber !== 0 && numberSwimmers !== 0) {
        let i = 0

        let name = []
        let classification = []
        let timeScore = []
        let club = []
        let points = []
        let scoreClubA = 0  
        let scoreClubB = 0

        while (i < numberSwimmers) {
            console.log(`\nNadador ${i+1}:\n`)
            name[i] = input('Digite o nome do nadador: ')
            classification[i] = Number(input('Digite a classificação: '))
            timeScore[i] = Number(input('Digite o tempo (em s): '))
            club[i] = input('Digite o clube: ')
            
            if (classification === 1) {
                points = 9
            } else if (classification === 2) {
                points = 6
            } else if (classification === 3) {
                points = 4
            } else if (classification === 4) {
                points = 3
            } else {
                points = 0
            }

            if (club[i] === 'a') {
                scoreClubA += points
            } else if (club[i] === 'b') {
                scoreClubB += points
            }

            i++
        }


        swimTestNumber = Number(input('\nDigite o número da prova: '))
        numberSwimmers = Number(input('Digite a quantidade de nadadores: '))
    }

    
    console.log(`\nPontos para o time A: ${scoreClubA}`)
    console.log(`Pontos para o time B: ${scoreClubB}`)

    if (scoreClubA > scoreClubB) {
        console.log('\nTime campeão: time A!')
    } else if (scoreClubA < scoreClubB) {
        console.log('\nTime campeão: time A!')
    } else {
        console.log('\nEmpate!')
    }
}


main()