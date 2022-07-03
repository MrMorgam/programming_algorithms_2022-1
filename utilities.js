import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt({ sigint: true })

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

export function loadFile(filename){
    try{
        const data = fs.readFileSync(filename, "utf-8")
        return data
    } catch (error){
        console.error(error)
    }
}



// Arrays

export function newArray(length = 0) {
    return new Array(length)
}


// Strings

function isConsonant(character) {

    return (isLetter(character) && !isVowell(character))

}


function isUppercaseLetter(character) {
    const charCode = character.charCodeAt(0)
    
    return (charCode <= 65 && charCode <= 90)
}

function isLowercaseLetter(character) {
    const charCode = character.charCodeAt(0)
    
    return (charCode <= 97 && charCode <= 122)
}


function isLetter(character) {

    return (isLowercaseLetter(character) || isUppercaseLetter(character))

}


function isLowercaseVowell(character) {
    const charCode = character.charCodeAt(0)

    return (charCode === 97 || charCode === 101 || charCode === 105 || charCode === 111 || charCode === 117)
}


function isUppercaseVowell(character) {
    const charCode = character.charCodeAt(0)

    return (charCode === 65 || charCode === 69 || charCode === 73 || charCode === 79 || charCode === 85)
}

export function isVowell(character) {

    return (isLowercaseVowell(character) || isUppercaseVowell(character))

}


// Matrices

export function newMatrix(rowsNumber, columnsNumber = rowsNumber){
    const matrix = newArray(rowsNumber)

    for (let i = 0; i < rowsNumber; i++){
        matrix[i] = newArray(columnsNumber)
    }

    return matrix
}


export function displayMatrix(matrix, title = 'Dados:') {
    console.log(title)
    console.table(matrix)
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


export function isOdd(n) {
    return n % 2 === 0
}