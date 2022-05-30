import {input} from '../io_utils.js'

function main(){
    // Input
    const userInput = Number(input('Digite a senha de acesso: '))
    
    // Processing
    const password = 1234
    const access = verify_password(userInput, password)

    // Output
    console.log(`Acesso ${access}`)
}

function verify_password(user_input, sys_password){
    if(user_input === sys_password){
        return 'permitido'
    }else{
        return 'negado'
    }
}

main()