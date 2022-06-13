import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numberOfVoters = Number(input('Digite a quantidade de eleitores: '))

    const votes = new Array(numberOfVoters)

    for (let i = 0; i < numberOfVoters; i++) {
        console.log(`\nEleitor ${i+1}:`)
        votes[i] = Number(input('Digite seu voto: '))
    }

    const votesCandidate1 = countVotes(votes, 1)
    const votesCandidate2 = countVotes(votes, 2)
    const votesCandidate3 = countVotes(votes, 3)
    const votesArray = [votesCandidate1, votesCandidate2, votesCandidate3]
    const nullVotes = countVotes(votes, 9)
    const blankVotes = countVotes(votes, 0)
    const electionWinner = countElectionWinner(votesArray)

    console.log(`\nVotos para o candidato 1: ${votesCandidate1}`)
    console.log(`Votos para o candidato 2: ${votesCandidate2}`)
    console.log(`Votos para o candidato 3: ${votesCandidate3}`)
    console.log(`Votos nulos: ${nullVotes}`)
    console.log(`Votos em branco: ${blankVotes}`)
    console.log(`Candidato vencedor: candidato ${electionWinner}`)
}

function countVotes(votes, digitOfVote) {
    let totalVotes = 0

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === digitOfVote) {
            totalVotes++
        }
    }

    return totalVotes
}

function countElectionWinner(votesArray){
    let mostVoted = 0
    let candidate = 0

    for (let i = 0; i < votesArray.length; i++) {
        if (votesArray[i] > mostVoted) {
            mostVoted = votesArray[i]
            candidate = i + 1
        }
    }

    return candidate
}

main()