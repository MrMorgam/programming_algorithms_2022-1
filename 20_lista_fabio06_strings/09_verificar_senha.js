import { displayMessage, getString } from '../utilities.js'

function main() {
    const password = getString('Digite a senha: ')

    if (isPasswordCorrect(password)) {
        displayMessage(`\nAcesso autorizado!`)
    } else {
        displayMessage(`\nAcesso negado!`)
    }
}

function isPasswordCorrect(password, correctPassword = 'fofolete22') {
    return password === correctPassword
}


main()