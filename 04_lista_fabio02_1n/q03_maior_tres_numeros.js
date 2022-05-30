import {input} from '../io_utils.js'

function main(){
    // Input
    const [number1, number2, number3] = input("Digite 3 números: ").split(" ").map(Number)

    // Processing
    const greaterNumber = calc_greater_number(number1, number2, number3)

    // Output
    console.log(`Maior número: ${greaterNumber}`) 
}

function calc_greater_number(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1 
    }else if(num2 >= num1 && num2 >= num3){
        return num2
    }else{
        return num3 
    }   
}

main()