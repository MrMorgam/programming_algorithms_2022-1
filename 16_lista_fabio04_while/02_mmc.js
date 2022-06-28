import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const number1 = Number(input('Digite um número inteiro: '))
    const number2 = Number(input('Digite outro número inteiro: '))

    const lcm = calc_lcm(number1, number2)

    console.log(`lcm(${number1},${number2}) = ${lcm}`)

}

export function calc_lcm(number1, number2){
    let lcm = 1

    while(!(isMultiple(number1, lcm) && isMultiple(number2, lcm))){
        lcm++
    }

    return lcm
}

function isMultiple(number1, number2){
    return number1 % number2 === 0
}

main()