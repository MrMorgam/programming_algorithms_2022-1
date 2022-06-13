import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numberQuantity = Number(input('Digite a quantidade de números: '))
    
    const numbersArray = new Array(numberQuantity)

    for (let i = 0; i < numbersArray.length; i++) {
        numbersArray[i] = Number(input(`${i+1}º número: `))
    }

    const sumNumbers = sumNumbersOfAnArray(numbersArray)
    const averageNumber = averageNumberOfAnArray(numbersArray)

    console.log(`Soma dos números: ${sumNumbers}`)
    console.log(`Média dos números: ${averageNumber}`)
}

function sumNumbersOfAnArray(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum
}

function averageNumberOfAnArray(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum / array.length
}


main()