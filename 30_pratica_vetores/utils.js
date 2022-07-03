import prompt from 'prompt-sync'
const input = prompt({ sigint: true })

export function inputNumber(message, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number)) {
        number = Number(input(errorMessage))
    }

    return number
}

export function inputPositiveNumber(message, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number) || number <= 0) {
        number = Number(input(errorMessage))
    }

    return number
}

export function inputNegativetiveNumber(message, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number) || number >= 0) {
        number = Number(input(errorMessage))
    }

    return number
}


export function inputNumberInRange(message, min, max, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number) || number < min || number > max) {
        number = Number(input(errorMessage))
    }

    return number
}