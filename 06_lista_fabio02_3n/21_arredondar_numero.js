import {input} from '../io_utils.js'

function main(){
    // Input
    const number = Number(input('Digite um número: '))
    
    // Processing
    const decimalPart = calc_decimal_part_of_number(number)
    let roundedNumber

    if(decimalPart >= 0.5){
        roundedNumber = Math.trunc(number) + 1
    }else{
        roundedNumber = Math.trunc(number)
    }

    // Output
    console.log(`Número arredondado: ${roundedNumber}`)
}

function calc_decimal_part_of_number(num){
    return num - Math.trunc(num)
}

main()