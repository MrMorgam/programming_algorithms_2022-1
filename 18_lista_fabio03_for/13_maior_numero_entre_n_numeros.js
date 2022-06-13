import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numberQuantity = Number(input('Digite a quantidade de números: '))
    
    const numbersArray = new Array(numberQuantity)

    for (let i = 0; i < numbersArray.length; i++) {
        numbersArray[i] = Number(input(`${i+1}º número: `))
    }

    const greaterNumber = greaterNumberOfAnArray(numbersArray)

    console.log(`Maior número: ${greaterNumber}`)
}

function greaterNumberOfAnArray(array) {
    let greaterNumber = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > greaterNumber) {
            greaterNumber = array[i]
        }
    }

    return greaterNumber
}

main()