import { get_number } from './input_utilities.js'

function main(){
    const grade = get_number('Digite a nota: ')
    
    const passOrFail = verify_letter_is_vowell_or_consonant(grade)
    
    console.log(`\n${passOrFail}\n`)
}

function verify_letter_is_vowell_or_consonant(grade){
    if(grade > 10 || grade < 0){
        return 'Nota inválida'
    }else if(grade === 10){
        return 'Aprovado com distinção'
    }else if(grade >= 7){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }
}

main()