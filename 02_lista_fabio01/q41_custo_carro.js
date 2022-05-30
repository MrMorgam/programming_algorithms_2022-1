import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const manufacturing_cost = Number(input("Digite o custo de fábrica do carro (em R$): "))

   //Processamento
   const distributor_cost = 0.28 * manufacturing_cost
   const tax = 0.45 * manufacturing_cost
   const consumer_cost = manufacturing_cost + distributor_cost + tax

   //Saída
   print(`O custo total ao consumidor é: R$${consumer_cost}.`)
    
}

main()