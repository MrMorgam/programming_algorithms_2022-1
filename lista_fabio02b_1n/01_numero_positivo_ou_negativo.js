import { get_number } from './input_utilities.js'

function main(){
    const number = get_number('Digite um número: ')
    
    const numberSign = verify_number_sign(number)
    
    if(numberSign === 0){
        console.log('\nNulo\n')
    }else if(numberSign === 1){
        console.log('\nPositivo\n')
    }else if(numberSign === -1){
        console.log('\nNegativo\n')
    }
}

function verify_number_sign(number){
    if(number === 0){
        return 0
    }else if(number > 0){
        return 1
    }else{
        return -1
    }
}

main()