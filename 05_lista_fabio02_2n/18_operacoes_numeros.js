import {input} from '../io_utils.js'

function main(){
    // Input
    const [number1, number2] = input('Digite dois números inteiros: ').split(' ').map(Number)
    console.log('1- Adição, 2- Subtração, 3- Multiplicação, 4- Divisão')
    const operation = Number(input('Digite o número da operação a ser executada entre os dois números: '))

    // Processing
    const sum = sum_2_numbers(number1, number2)
    const subt = subt_2_numbers(number1, number2)
    const mult = mult_2_numbers(number1, number2)
    const div = div_2_numbers(number1, number2)
    
    if(operation === 1){
        console.log(`${number1} + ${number2} = ${sum}`)
    }else if(operation === 2){
        console.log(`${number1} - ${number2} = ${subt}`)
    }else if(operation === 3){
        console.log(`${number1} * ${number2} = ${mult}`)
    }else if(operation === 4){
        if(number2 !== 0){
            console.log(`${number1} / ${number2} = ${div}`)
        }else{
            console.log('Erro! (Divisão por zero)')
        }
    }else{
        console.log('Número de operação inválida')
    }
}

function sum_2_numbers(n1, n2){
    return n1 + n2
}

function subt_2_numbers(n1, n2){
    return n1 - n2
}

function mult_2_numbers(n1, n2){
    return n1 * n2
}

function div_2_numbers(n1, n2){
    return n1 / n2
}

main()