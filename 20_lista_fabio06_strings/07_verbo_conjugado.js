import { displayMessage, getString } from '../utilities.js'

function main() {
    const verb = getString('Digite um verbo regular da 2ª conjugação (-ER) na forma infinitiva: ')

    displayConjugatedVerb(verb)
}


function displayConjugatedVerb(verb) {
    let stem = ''

    for (let i = 0; i < verb.length - 2; i++) {
        stem += verb[i]
    }

    displayMessage(`\nVerbo ${verb} no presente do indicativo:`)
    displayMessage(`eu ${stem}o`)
    displayMessage(`tu ${stem}es`)
    displayMessage(`ele ${stem}e`)
    displayMessage(`nós ${stem}emos`)
    displayMessage(`vós ${stem}eis`)
    displayMessage(`eles ${stem}em`)
}


main()