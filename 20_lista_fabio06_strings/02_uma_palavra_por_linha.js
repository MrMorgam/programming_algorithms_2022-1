import { displayMessage, getString } from '../utilities.js'

function main() {
    const sentence = getString('Digite uma frase: ')

    displayOneWordPerLine(sentence)
}


function displayOneWordPerLine(text) {
    const separatedWords = text.split(' ')

    for (let i = 0; i < separatedWords.length; i++) {
        displayMessage(separatedWords[i])
    }
}


main()