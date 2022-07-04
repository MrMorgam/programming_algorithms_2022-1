import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt({ sigint: true })


// Input

export function inputString(message) {
    return input(message)
}


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

export function loadFile(filename){
    try{
        const data = fs.readFileSync(filename, "utf-8")
        return data
    } catch (error){
        console.error(error)
    }
}


// Output

export function displayText(message) {
    return(console.log(message))
}

// Other

export function generateRandomNumber(min = 0, max = 100){
    return Math.floor(Math.random() * (max - min)) + min
}