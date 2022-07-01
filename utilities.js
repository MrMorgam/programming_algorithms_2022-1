import prompt from 'prompt-sync'
const input = prompt()

// Input

export function getNumber(message = 'Digite um número: ', errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number)) {
        number = Number(input(errorMessage))
    }

    return number
}


export function getString(message = 'Digite um texto: ') {
    return input(message)
}


export function getIntegerInRange(message = 'Digite um número inteiro: ', min = -Infinity, max = Infinity, errorMessage = message) {
    let integer = Number(input(message))

    while (isNaN(integer) || !isInteger(integer) || !isNumberInRange(integer, min, max)) {
        integer = Number(input(errorMessage))
    }

    return integer
}

// Arrays

export function newArray(length = 0) {
    return new Array(length)
}


// Output

export function displayMessage(message) {
    return(console.log(message))
}


// Other

export function generateRandomNumber(min = 0, max = 100){
    return Math.floor(Math.random() * (max - min)) + min
}


function isInteger(n) {
    return n % 1 === 0
}


function isNumberInRange(n, min, max) {
    return !(n > max || n < min)

}