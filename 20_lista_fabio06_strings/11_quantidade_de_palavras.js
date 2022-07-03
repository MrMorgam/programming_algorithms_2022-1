import { displayMessage, getString } from '../utilities.js'

function main() {
    const text = getString('Digite um texto: ')

    const wordCount = countWords(text)

    displayMessage(`Número de palavras: ${wordCount}`)

}

function countWords(text) {
    let wordCounter = 0

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            wordCounter++
        }
    }

    return wordCounter + 1
}


main()