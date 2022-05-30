import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const amount_year = Number(input("Digite a quantidade de anos: "))
   const amount_cigarette_day = Number(input("Digite a quantidade de cigarros por dia: "))
   const portfolio_price = Number(input("Digite o valor da carteira (em R$): "))

   //Processamento
   const cigarette_price = portfolio_price / 20
   const total_spend = (amount_year * 365) * amount_cigarette_day * cigarette_price

   //Saída
   print(`Total de gastos: R$${total_spend.toFixed(2)}.`)
    
}

main()