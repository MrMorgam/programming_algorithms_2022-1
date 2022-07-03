import { displayMessage, getString } from '../utilities.js'

function main() {
    const sentence = getString('Digite um frase contendo um algarismo: ')

    const sentenceWithNumberInFull = textWithNumberInFull(sentence)

    displayMessage(`\nNova frase: ${sentenceWithNumberInFull}`)
}


function textWithNumberInFull(text) {
    let  sentenceWithNumberInFull = ''

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '0') {
            sentenceWithNumberInFull += 'zero'
        } else if (text[i] === '1') {
            sentenceWithNumberInFull += 'um(a)'
        } else if (text[i] === '2') {
            sentenceWithNumberInFull += 'dois(uas)'
        } else if (text[i] === '3') {
            sentenceWithNumberInFull += 'três'
        } else if (text[i] === '4') {
            sentenceWithNumberInFull += 'quatro'
        } else if (text[i] === '5') {
            sentenceWithNumberInFull += 'cinco'
        } else if (text[i] === '6') {
            sentenceWithNumberInFull += 'seis'
        } else if (text[i] === '7') {
            sentenceWithNumberInFull += 'sete'
        } else if (text[i] === '8') {
            sentenceWithNumberInFull += 'oito'
        } else if (text[i] === '9') {
            sentenceWithNumberInFull += 'nove'
        } else {
            sentenceWithNumberInFull += text[i]
        }
    }

    return sentenceWithNumberInFull
}


main()