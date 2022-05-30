import { get_number } from './input_utilities.js'

function main(){
    const number = get_number('Digite um número: ')

    const isIntenger = verify_number_integer(number)

    if(isIntenger){
        console.log('\nO número é inteiro!\n')
    }else{
        console.log('\nO número não é inteiro!\n')
    }
}

function verify_number_integer(number){
    return number - Math.trunc(number) === 0
}

main()