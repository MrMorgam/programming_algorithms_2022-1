import { print, input } from '../io_utils.js'


function main (){
    //Entrada
    const wage = Number(input("Digite o salário (em R$): "))

    //Processamento
    const wage_increase = wage + (wage * 0.25)

    //Saída
    print(`O salário após o aumento de 25% será: R$${wage_increase.toFixed(2)}.`)

}

main()