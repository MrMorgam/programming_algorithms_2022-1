import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const number1 = Number(input('Digite um número inteiro: '))
    const number2 = Number(input('Digite outro número inteiro: '))

    const mcm = calc_mcm(number1, number2)

    console.log(`MMC(${number1},${number2}) = ${mcm}`)

}

function calc_mcm(number1, number2){
    let mcm = 1

    while(!(is_multiple(number1, mcm) && is_multiple(number2, mcm))){
        mcm++
    }

    return mcm
}

function is_multiple(number1, number2){
    return number1 % number2 === 0
}

main()