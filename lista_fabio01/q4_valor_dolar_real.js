import { print, input } from '../io_utils.js'


function main (){
    //Entrada
    const usd_quote = Number(input("Digite a cotação do dólar (em R$): "))
    const usd_value  = Number(input( "Digite o valor em dólares: "))

    //Processamento
    const brl_value = usd_quote * usd_value

    //Saída
    print(`O valor em reais é: R$${brl_value.toFixed(2)}`)
}

main()