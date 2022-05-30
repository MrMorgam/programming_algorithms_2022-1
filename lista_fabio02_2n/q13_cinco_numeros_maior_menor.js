import {input} from '../io_utils.js'

function main(){
    // Input
    const [number1, number2, number3, number4, number5] = input('Digite cinco números inteiros diferentes: ').split(' ').map(Number)

    // Processing
    const greaterNumber = verify_greater_number(number1, number2, number3, number4, number5)
    const smallerNumber = verify_smaller_number(number1, number2, number3, number4, number5)

    // Output
    console.log(`Maior número: ${greaterNumber}`)
    console.log(`Menor número: ${smallerNumber}`)
}

function verify_greater_number(num1, num2, num3, num4, num5){
    return Math.max(num1, num2, num3, num4, num5)
}

function verify_smaller_number(num1, num2, num3, num4, num5){
    return Math.min(num1, num2, num3, num4, num5)
}

main()