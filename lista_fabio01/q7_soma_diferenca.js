import { print, input } from '../io_utils.js'


function main (){
    //Entrada
    const number1 = Number(input("Digite o primeiro número: "))
    const number2 = Number(input("Digite o segundo número: "))
    const number3 = Number(input("Digite o terceiro número: "))

    //Processamento
    const sum = number1 + number2
    const diff = number2 - number3

    //Saída
    print(`A soma de ${number1} e ${number2} é: ${sum}.`)
    print(`A diferença entre ${number2} e ${number3} é: ${diff}.`)


}

main()