import { displayMessage, getString } from '../utilities.js'

function main() {
    const sentence = getString('Digite uma frase: ')

    const sentenceWithNoSpace = textWithNoSpace(sentence)

    displayMessage(`\nFrase sem espaços: ${sentenceWithNoSpace}`)
}


function textWithNoSpace(text) {
    const separatedWords = text.split(' ')
    
    let sentenceWithNoSpace = ''

    for (let i = 0; i < separatedWords.length; i++) {
        sentenceWithNoSpace += separatedWords[i]
    }

    return sentenceWithNoSpace
}


main()