import { calc_lcm } from './02_mmc'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const number1 = Number(input('Digite um número inteiro: '))
    const number2 = Number(input('Digite outro número inteiro: '))

    const gcd = calc_gcd(number1, number2)

    console.log(`gdc(${number1},${number2}) = ${gcd}`)

}

function calc_gcd(number1, number2){
    return (Math.abs(number1 * number2)) / (calc_lcm(number1, number2))
}

main()