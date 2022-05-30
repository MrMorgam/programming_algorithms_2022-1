import {input} from '../io_utils.js'

function main(){
    // Input
    const [number1, number2] = input("Digite 2 números: ").split(" ").map(Number)

    // Processing
    const greaterNumber = calc_greater_number(number1, number2)
    const smallerNUmber = calc_smaller_number(number1, number2)

    // Output
    if(number1 === number2){
        console.log('Os números são iguais')
    }else{
        console.log(`Maior número: ${greaterNumber}`)
        console.log(`Menor número: ${smallerNUmber}`)
    }
}

function calc_greater_number(num1, num2){
    return Math.max(num1, num2)
}

function calc_smaller_number(num1, num2){
    return Math.min(num1, num2)
}

main()