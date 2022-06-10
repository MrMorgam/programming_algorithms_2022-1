import {input} from '../io_utils.js'

function main(){
    // Input
    const number = Number(input('Digite um número de quatro dígitos: '))

    // Processing
    const numberProperty = verify_number_property_four_digt(number)

    // Output
    if(number < 1000 || number > 9999){
        console.log('Número inválido')
    }else{
        console.log(`O número obedece à propriedade: ${numberProperty}`)
    }
}

function verify_number_property_four_digt(num){
    const alg1 = Math.trunc(num / 1000)
    const remainder1 = num % 1000
    const alg2 = Math.trunc(remainder1 / 100)
    const remainder2 = remainder1 % 100
    const alg3 = Math.trunc(remainder2 / 10)
    const alg4 = remainder2 % 10

    const half1 = alg1*10 + alg2
    const half2 = alg3*10 + alg4
    const sum = half1 + half2
    const sqr = sum ** 2

    if(sqr === num){
        return 'sim'
    }else{
        return 'não'
    }
}

main()