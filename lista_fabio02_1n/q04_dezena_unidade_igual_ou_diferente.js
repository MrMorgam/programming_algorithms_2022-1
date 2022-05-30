import {input} from '../io_utils.js'

function main(){
    // Input
    const number = Number(input("Digite um número de dois dígitos: "))

    // Processing
    let equalOrDifferent = calc_ten_unit_equal_or_diff(number)

    if(equalOrDifferent === true){
        equalOrDifferent = 'iguais'
    }else{
        equalOrDifferent = 'diferentes'
    }

    // Output
    console.log(`O algarismo da dezena e algarismo da unidade são: ${equalOrDifferent}`)
}

function calc_ten_unit_equal_or_diff(num) {
    const ten = Math.trunc(num / 10)
    const unit = num % 10 

    if(ten === unit){
        return true
    }else{
        return false
    }    
}

main()