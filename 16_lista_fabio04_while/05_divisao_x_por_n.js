import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const numberX = Number(input('Digite um número inteiro: '))
    const numberN = Number(input('Digite outro número inteiro: '))

    showDivision(numberX, numberN)
}

function showDivision(x, n) {

    while (n > 2) {
        x /= n
        console.log(x)
        n--
        
    }

}

main()