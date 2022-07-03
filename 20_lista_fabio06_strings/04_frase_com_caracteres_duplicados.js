import { displayMessage, getString } from '../utilities.js'

function main() {
    const sentece = getString()

    const senteceWithDuplicateChars = textWithDuplicateChars(sentece)

    displayMessage(senteceWithDuplicateChars)
}


function textWithDuplicateChars(text) {
    let senteceWithDuplicateChars = ''

    for (let i = 0; i < text.length; i++) {
        senteceWithDuplicateChars += text[i] + text[i]
    }

    return senteceWithDuplicateChars
}

main()