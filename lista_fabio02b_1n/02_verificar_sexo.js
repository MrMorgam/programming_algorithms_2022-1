import { get_text } from './input_utilities.js'

function main(){
    const sexInput = get_text('Digite o sexo (M ou F): ')
    
    const sexOutput = verify_sex(sexInput)
    
    console.log(`\n${sexOutput}\n`)
}

function verify_sex(sexInput){
    if(sexInput.toUpperCase() === 'M'){
        return 'Masculino'
    }else if(sexInput.toUpperCase() === 'F'){
        return 'Feminino'
    }else{
        return 'Sexo inválido'
    }
}

main()