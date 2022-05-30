import {input} from '../io_utils.js'

function main(){
    // Input
    const [number1, number2, number3] = input("Digite 3 números: ").split(" ").map(Number)

    // Processing
    const equalNumbers = calc_equal_numbers(number1, number2, number3)

    // Output
    if(equalNumbers === 0){
        console.log('Todos os números são diferentes uns dos outro')
    }else{
        console.log(`A quantidade de números iguais é: ${equalNumbers}`)
    }
}

function calc_equal_numbers (num1, num2, num3) {
    if(num1 === num2 && num2 === num3){
        return 3
    }else if(num1 === num2 || num1 === num3 || num2 === num3){
        return 2
    }else{
        return 0
    }
}

main()