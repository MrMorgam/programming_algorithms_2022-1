import {input} from '../io_utils.js'

function main(){
    // Input
    const [number1, number2] = input('Digite dois números inteiros: ').split(' ').map(Number)
    
    // Processing
    const remainder = number1 % number2

    const sum = number1 + number2 + remainder

    const number1IsEven = verify_number_is_even(number1)
    const number2IsEven = verify_number_is_even(number2)
    let number1IsOddOrEven
    let number2IsOddOrEven

    if(number1IsEven === true){
        number1IsOddOrEven = 'par'
    }else{
        number1IsOddOrEven = 'ímpar'
    }

    if(number2IsEven === true){
        number2IsOddOrEven = 'par'
    }else{
        number2IsOddOrEven = 'ímpar'
    }
    
    const mult = (number1 + number2) * number1

    const div = (number1 + number2) / number2

    const squareNum1 = number1 ** 2
    const squareNum2 = number2 ** 2

    // Output
    if(remainder === 1){
        console.log(`A soma dos dois números mais o resto da divisão entre eles é: ${sum}`)
    }else if(remainder === 2){
        console.log(`O número ${number1} é ${number1IsOddOrEven}`)
        console.log(`O número ${number2} é ${number2IsOddOrEven}`)
    }else if(remainder === 3){
        console.log(`A multiplicação da soma dos dois números vezes o primeiro número é: ${mult}`)
    }else if(remainder === 4 && number2 !== 0){
        console.log(`A divisão entre a soma dos dois números e o segundo número é: ${div}`)
    }else{
        console.log(`Quadrado do primeiro número: ${squareNum1}`)
        console.log(`Quadrado do segundo número: ${squareNum2}`)
    }
}

function verify_number_is_even(num){
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}

main()