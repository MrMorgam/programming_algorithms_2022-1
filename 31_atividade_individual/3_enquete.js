import { inputNumber, inputPositiveNumber, inputString } from './1_utils.js'


function main() {
    // (a)
    const quantidadeCandidatos = inputPositiveNumber('Digite a quantidade de candidatos a exibir na enquete: ')

    //(b)
    const candidatos = new Array(quantidadeCandidatos)

    for (let i = 0; i < candidatos.length; i++) {
        candidatos[i] = inputString(`Digite o nome do candidato ${i}: `)
    }

    //(c)
    let votos = new Array(quantidadeCandidatos)

    for (let i = 0; i < votos.length; i++) {
        votos[i] = 0
    }

    let votosEmBranco = 0
    let votosNulos = 0
    let naoOpinaram = 0

    console.clear()
    mostrarMenu(candidatos)
    console.log('')

    // (d)
    let option = inputNumber('Digite a sua opção de escolha: ')

    while ((option < -1 || option > candidatos.length - 1) && option !== 100 && option !== 101 && option !== 102) {
        console.log('\nOpção inválida!')
        option = inputNumber('Digite a sua opção de escolha: ')
    }

    // (f) (g)
    let quantidadePessoas = 0

    while (option !== -1) {
        
       if (option === 100) {
            votosEmBranco++
        } else if (option === 101) {
            votosNulos++
        } else if (option === 102) {
            naoOpinaram++
        } else {
            votos[option]++
        }
        
        console.clear()
        mostrarMenu(candidatos)
        console.log('')

        option = inputNumber('Digite a sua opção de escolha: ')

        while ((option < -1 || option > candidatos.length - 1) && option !== 100 && option !== 101 && option !== 102) {
            console.log('\nOpção inválida!')
            option = inputNumber('Digite a sua opção de escolha: ')
        }

        quantidadePessoas++

    }


    const percentuais = new Array(quantidadeCandidatos + 3)

    for (let i = 0; i < quantidadeCandidatos + 3; i++) {
        percentuais[i] = calcPorcentagem(votos[i], quantidadePessoas)
    }

    const percentualEmBranco = calcPorcentagem(votosEmBranco, quantidadePessoas)
    const percentualNulo = calcPorcentagem(votosNulos, quantidadePessoas)
    const percentualNaoOpinou = calcPorcentagem(naoOpinaram, quantidadePessoas)

    let indiceMaisVotos = 0
    let maisVotado = votos[0]

    for (let i = 0; i < quantidadeCandidatos; i++) {
        if (maisVotado < votos[i]) {
            indiceMaisVotos = i
            maisVotado = votos[i]
        }
    }


    // (h)
    console.clear()
    console.log(`Quantidade de pessoas entrevistadas: ${quantidadePessoas}`)

    for (let i = 0; i < quantidadeCandidatos; i++) {
        console.log(`Votos para o candidato ${candidatos[i]}: ${votos[i]} (${percentuais[i].toFixed(2)} %)`)
    }

    console.log(`Votos em branco: ${votosEmBranco} (${percentualEmBranco.toFixed(2)}%)`)
    console.log(`Votos nulos: ${votosNulos} (${percentualNulo.toFixed(2)}%)`)
    console.log(`Não Opinaram: ${naoOpinaram} (${percentualNaoOpinou.toFixed(2)}%)`)
    console.log(`O(a) candidato(a) ${candidatos[indiceMaisVotos]} lidera a pesquisa!`)

}

// (d)
function mostrarMenu(candidatos) {
    let menu = '\n********* PESQUISA ELEITORAL *********\n'
    
    for (let i = 0; i < candidatos.length; i++) {
        menu += `\n${i} - ${candidatos[i]}`
    }
        
    menu += `\n\n100 - voto em branco`
    menu += `\n101 - voto nulo`
    menu += `\n102 - não quer opinar`

    console.log(menu)
}


function calcPorcentagem(parte, todo) {
    return (parte / todo) * 100
}


main()