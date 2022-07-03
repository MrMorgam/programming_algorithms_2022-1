import { displayMessage, getString, isVowell } from '../utilities.js'

function main() {
    const sentence = getString('Digite uma frase: ')

    const encryptedText = encryptText(sentence)

    displayMessage(`Mensagem encriptada: "${encryptedText}"`)
}


function encryptText(text) {
    const invertedText = invertText(text)
    console.log(invertedText)

    return replaceConsonants(invertedText, '#')
}

function invertText(text) {
    let invertedText = ''

    for (let i = text.length - 1; i >= 0; i--) {
        invertedText += text[i]
    }

    return invertedText
}


function replaceConsonants(text, replacementChar) {
    let textWithReplacedConsonants = ''

    for (let i = 0; i < text.length; i++) {
        if (isVowell(text[i])) {
            textWithReplacedConsonants += replacementChar
        } else {
            textWithReplacedConsonants += text[i]
        }
    }

    return textWithReplacedConsonants
}



main()