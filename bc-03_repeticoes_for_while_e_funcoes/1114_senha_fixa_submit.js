import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let password = Number(input('Digite a senha: '))

    while(password !== 2022){
        password = Number(input('Digite a senha: '))
        console.log('Senha Invalida')
    }

    console.log('Acesso Permitido')
}

main()