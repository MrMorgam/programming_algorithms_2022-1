import { displayMessage, getString } from '../utilities.js'

function main() {
    const time = getString('Digite um horário (no formato hh:mm:ss): ')

    const timeInFull = writeTimeInFull(time)

    displayMessage(`\nHorário por extenso: ${timeInFull}`)
}


function writeTimeInFull(time) {
    const [hours, minutes, seconds] = time.split(':')

    return `${hours} hora(s), ${minutes} minuto(s) e ${seconds} segundo(s)`
}


main()