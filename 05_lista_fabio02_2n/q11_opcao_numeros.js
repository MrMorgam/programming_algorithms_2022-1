import {input} from '../io_utils.js'

function main(){
    // Input
    const option = Number(input('Digite um número de 1 a 3: '))
    const [number1, number2, number3] = input('Digite três números: ').split(' ').map(Number)

    // Processing
    let chosenNumber = choose_number(option, number1, number2, number3)
    
    // Output
    if(chosenNumber === false){
        console.log('Número de opção inválido')
    }else{
        console.log(`O número escolhido foi: ${chosenNumber}`)    
    }
}

function choose_number(opt, num1, num2, num3){
    if(opt === 1){
        return num1
    }else if(opt === 2){
        return num2
    }else if(opt === 3){
        return num3
    }else{
        return false
    }
}

main()