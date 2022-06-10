import { print, input } from '../io_utils.js'


function main (){
   const name = input('Digite o nome do vendedor: ')
   const salary = Number(input('Digite o salário fixo: '))
   const sales = Number(input('Digite o total em vendas efetuadas no mês (em R$): '))

   const total = salary + (sales * 0.15)

   print(`TOTAL = R$ ${total.toFixed(2)}`)
}

main()