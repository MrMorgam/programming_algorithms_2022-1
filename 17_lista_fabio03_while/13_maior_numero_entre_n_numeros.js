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

    const greaterNumber = greaterNumberOfAnArray(numbersArray)

    console.log(`Maior número: ${greaterNumber}`)
}

function greaterNumberOfAnArray(array) {
    let i = 1
    let greaterNumber = array[0]

    while (i < array.length) {
        if (array[i] > greaterNumber) {
            greaterNumber = array[i]
        }
    
        i++
    }

    return greaterNumber
}

main()