import { print, input } from '../io_utils.js'


function main (){
    //Entrada
    const number = Number(input("Digite um número com três dígitos: "))

    //Processamento
    const hundred = Math.trunc(number / 100)
    const remainder = number % 100
    const ten = Math.trunc(remainder / 10)
    const unit = remainder % 10

    //Saída
    print(`O inverso de ${number} é: ${unit}${ten}${hundred}.`)

}

main()