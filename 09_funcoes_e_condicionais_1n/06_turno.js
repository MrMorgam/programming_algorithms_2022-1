import { get_text } from './input_utilities.js'

function main(){
    const shiftInput = get_text('Digite o turno (M, V ou N): ')
    
    const shiftOutput = verify_shift(shiftInput)
    
    console.log(`\n${shiftOutput}\n`)
}

function verify_shift(shift){ 
    if(shift.length !== 1){
        return 'Digite uma letra'
    }else if(shift === '1' || shift === '2' || shift === '3' || shift === '4' ||shift === '5' || shift === '6' ||shift === '7' || shift === '8' ||shift === '9' || shift === '0'){
        return 'Digite uma letra'
    }else if(shift.toUpperCase() === 'M'){
        return 'Matutino'
    }else if(shift.toUpperCase() === 'V'){
        return 'Vespertino'
    }else if(shift.toUpperCase() === 'N'){
        return 'Noturno'
    }else{
        return 'Turno inválido'
    }
}

main()