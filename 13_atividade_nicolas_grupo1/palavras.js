import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let phrase = input('Digite uma frase (entre 80 e 180 caracteres): ')

    while (phrase.length < 80 || phrase.length > 180) {
        console.log('\nNúmero de caracteres fora da margem!')
        phrase = input('Digite uma frase (entre 80 e 180 caracteres): ')
    }

    const numberWords = wordCounterInAPhrase(phrase)
    
    console.log(`\n${numberWords} palavras!`)
}


function wordCounterInAPhrase(phrase) {
    let wordCounter = 0

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
            wordCounter++
        }
    }

    return wordCounter + 1
}


main()