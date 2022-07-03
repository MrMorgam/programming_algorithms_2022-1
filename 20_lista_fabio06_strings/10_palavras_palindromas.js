import { displayMessage, getString } from '../utilities.js'

function main() {
    const word = getString('Digite uma palavra: ')

    if (isPalindrome(word)) {
        displayMessage(`A palavra "${word}" é palíndroma!`)
    } else {
        displayMessage(`A palavra "${word}" não é palíndroma!`)
    }
}


function isPalindrome(word) {
    let invertedWord = ''

    for (let i = word.length - 1; i >= 0; i--) {
        invertedWord += word[i]
    }
    

    return invertedWord === word
}


main()