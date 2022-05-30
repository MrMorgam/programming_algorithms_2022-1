import { print, input } from '../io_utils.js'


function main (){
    //Entrada
    const value = Number(input("Digite um valor (em R$): "))

    //Processamento
    const final_value = value * 0.70

    //Saída
    print(`70% de R$${value} é: R$${final_value.toFixed(2)}.`)

}

main()