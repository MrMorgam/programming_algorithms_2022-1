import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numberX = Number(input('Digite um número: '))
    const numberY = Number(input('Digite outro número: '))

    let greaterNumber = 0
    let smallerNumber = 0
    
    if (numberY > numberX) {
        smallerNumber = numberX
        greaterNumber = numberY
    } else {
        smallerNumber = numberY
        greaterNumber = numberX
    }

    const sumNumbersNonMultiplesOf13 = sumNumbersNonMultiplesOf13InRange(smallerNumber, greaterNumber)

    console.log(sumNumbersNonMultiplesOf13)
}

function sumNumbersNonMultiplesOf13InRange(smallerNumber, greaterNumber) {
    let i = smallerNumber
    let sumNumbersNonMultiplesOf13 = 0
    
    while (i <= greaterNumber) {
        if (isMultipleOf13(i)) {
            i++
        } else {
            sumNumbersNonMultiplesOf13 += i
            i++
        }
    }

    return sumNumbersNonMultiplesOf13
}

function isMultipleOf13(number) {
    return number % 13 === 0
}

main()