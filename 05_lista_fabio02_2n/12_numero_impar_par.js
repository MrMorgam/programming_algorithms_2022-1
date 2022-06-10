import {input} from '../io_utils.js'

function main(){
    // Input
    const number = Number(input('Digite um número inteiro: '))

    // Processing
    const numberIsEven = verify_number_is_even(number)
    let evenOrOdd

    if(numberIsEven === true){
        evenOrOdd = 'par'
    }else{
        evenOrOdd = 'ímpar'
    }

    // Output
    console.log(`O número é: ${evenOrOdd}`)
}

function verify_number_is_even(num){
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}

main()