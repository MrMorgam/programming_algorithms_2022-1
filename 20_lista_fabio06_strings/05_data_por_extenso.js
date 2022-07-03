import { displayMessage, getString } from '../utilities.js'

function main() {
    const date = getString('Digite uma data no formato dd/mm/aaaa: ')

    const dateInFull = writeDateInFull(date)

    displayMessage(`\nData: ${dateInFull}`)
}


function writeDateInFull(date) {
    let [day, month, year] = date.split('/').map(Number)
    
    day = String(day)
    
    if (month === 1) {
        month = 'janeiro'
    } else if (month === 2) {
        month = 'fevereiro'
    } else if (month === 3) {
        month = 'março'
    } else if (month === 4) {
        month = 'abril'
    } else if (month === 5) {
        month = 'maio'
    } else if (month === 6) {
        month = 'junho'
    } else if (month === 7) {
        month = 'julho'
    } else if (month === 8) {
        month = 'agosto'
    } else if (month === 9) {
        month = 'setembro'
    } else if (month === 10) {
        month = 'outrubro'
    } else if (month === 11) {
        month = 'novembro'
    } else if (month === 12) {
        month = 'dezembro'
    }

    year = String(year)

    return `${day} de ${month} de ${year}`
}



main()