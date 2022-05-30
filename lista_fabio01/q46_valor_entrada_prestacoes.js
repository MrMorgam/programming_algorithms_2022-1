import { print, input } from '../io_utils.js'

function main (){
    //Entrada
    const value = Number(input("Digite o valor da mercadoria (em R$): "))

    //Processamento
    const down_payment = Math.trunc(value / 3) + (value % 3)
    const installment = (value - down_payment) / 2

    //Saída
    print(`O valor da entrada é: R$${down_payment}.`)
    print(`O valor da prestação é: R$${installment}.`)

}

main()
