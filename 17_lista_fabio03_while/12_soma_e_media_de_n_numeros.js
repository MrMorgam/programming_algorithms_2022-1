import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numberQuantity = Number(input('Digite a quantidade de números: '))
    
    const numbersArray = new Array(numberQuantity)

    let i = 0

    while (i < numbersArray.length) {
        numbersArray[i] = Number(input(`${i+1}º número: `))
        i++
    }

    const sumNumbers = sumNumbersOfAnArray(numbersArray)
    const averageNumber = averageNumberOfAnArray(numbersArray)

    console.log(`Soma dos números: ${sumNumbers}`)
    console.log(`Média dos números: ${averageNumber}`)
}

function sumNumbersOfAnArray(array) {
    let i = 0
    let sum = 0

    while (i < array.length) {
        sum += array[i]
        i++
    }

    return sum
}

function averageNumberOfAnArray(array) {
    let i = 0
    let sum = 0

    while (i < array.length) {
        sum += array[i]
        i++
    }

    return sum / array.length
}


main()