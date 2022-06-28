import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const originalNumber = Number(input('Digite um número inteiro: '))

    let number = Number(input('Digite um número inteiro: '))

    while (number !== originalNumber) {
        number = Number(input('Digite um número inteiro: '))
    }
    
    console.log(`Fim!`)
}


main()