import { get_number } from './input_utilities.js'

function main(){
    const dayInput = get_number('Digite um número correspondente a um dia da semana: ')
    
    const dayOutput = verify_day_of_the_week(dayInput)
    
    console.log(`\n${dayOutput}\n`)
}

function verify_day_of_the_week(day){
    if(day === 1){
        return 'Domingo'
    }else if(day === 2){
        return 'Segunda-feira'
    }else if(day === 3){
        return 'Terça-feira'
    }else if(day === 4){
        return 'Quarta-feira'
    }else if(day === 5){
        return 'Quinta-feira'
    }else if(day === 6){
        return 'Sexta-feira'
    }else if(day === 7){
        return 'Sábado'
    }else{
        return 'Valor inválido'
    }
}

main()