import prompt from 'prompt-sync'
const input = prompt({ sigint: true })


// (a)
export function inputNumber(message, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number)) {
        number = Number(input(errorMessage))
    }

    return number
}


// (b)
export function inputPositiveNumber(message, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number) || number <= 0) {
        number = Number(input(errorMessage))
    }

    return number
}


// (c)
export function inputNegativetiveNumber(message, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number) || number >= 0) {
        number = Number(input(errorMessage))
    }

    return number
}


// (d)
export function inputNotNullNumber(message, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number) || number === 0) {
        number = Number(input(errorMessage))
    }

    return number
}


// (e)
export function inputNumberWithMinValue(message, min, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number) || number < min) {
        number = Number(input(errorMessage))
    }

    return number
}


// (f)
export function inputNumberWithMaxValue(message, max, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number) || number > max) {
        number = Number(input(errorMessage))
    }

    return number
}


// (g)
export function inputNumberInRange(message, min, max, errorMessage = message) {
    let number = Number(input(message))

    while (isNaN(number) || number < min || number > max) {
        number = Number(input(errorMessage))
    }

    return number
}

// (h)
export function inputString(message, errorMessage = message) {
    let string = input(message)

    return string
}


// (i)
export function inputStringWithMinCharacters(message, min, errorMessage = message) {
    let string = input(message)

    while (string.length < min) {
        string = input(errorMessage)
    }

    return string
}


// (j)
export function inputStringWithMaxCharacters(message, max, errorMessage = message) {
    let string = input(message)

    while (string.length > max) {
        string = input(errorMessage)
    }

    return string
}


// (k)
export function inputStringWithCharactersInRange(message, min, max, errorMessage = message) {
    let string = input(message)

    while (string.length < min || string.length > max) {
        string = input(errorMessage)
    }

    return string
}


// (l)
export function inputTextWithMinWords(message, min, errorMessage = message) {
    let text = inputString(message)

    while (wordCounter(text) < min) {
        text = inputString(errorMessage)
    }

    return string
}


function wordCounter(text) {
    let wordCounter = 1

    for (let i = 0; i < text.length; i++) {
        if (wordCounter === ' ') {
            wordCounter++
        }
    }

    return wordCounter
}


// (m)
export function inputTextWithMaxWords(message, max, errorMessage = message) {
    let text = inputString(message)

    while (wordCounter(text) > max) {
        text = inputString(errorMessage)
    }

    return string
}


// (n)
export function inputTextWithOptions(message, option1, option2) {
    let text = inputString(message)

    while (text !== option1 && text !== option2) {
        text = inputString(errorMessage)
    }

    return string
}


// (o)
export function inputDate(message, errorMessage = message) {
    let date = input(message)
    let [day, month, year] = date.split('/').map(Number)

    while (!isValidDate(day, month, year)) {
        date = input(errorMessage)
        [day, month, year] = date.split('/').map(Number)
    }

    return date
}


function isValidDate(day, month, year) {
    
    if ((day < 1 || day > 31) || (month < 1 || month > 12) || (year < 1)) {
        return false
    } else if ((month === 4 || month === 6 || month === 9 || month === 11) && (day > 30))  {
        return false
    } else if (month === 2 && day > 28) {
        return false
    } else {
        return true
    }
    
}


 // Testes

function main() {

    // (o)
    // const date = inputDate('Digite um data (no formato dd/mm/aaaa): ', 'Digite uma data válida no formato dd/mm/aaaa: ')
}


main()