import { print, input } from '../io_utils.js'


function main (){
   const value = Number(input('Digite o valor (em R$): '))
   
   const bill100 = Math.trunc(value / 100)
   const remainder1 = value % 100
   const bill50 = Math.trunc(remainder1 / 50)
   const remainder2 = remainder1 % 50
   const bill20 = Math.trunc(remainder2 / 20)
   const remainder3 = remainder2 % 20
   const bill10 = Math.trunc(remainder3 / 10)
   const remainder4 = remainder3 % 10
   const bill5 = Math.trunc(remainder4 / 5)
   const remainder5 = remainder4 % 5 
   const bill2 = Math.trunc(remainder5 / 2)
   const bill1 = remainder5 % 2

   print(`Notas a receber:`)
   print(`${bill100} nota(s) de R$ 100,00`)
   print(`${bill50} nota(s) de R$ 50,00`)
   print(`${bill20} nota(s) de R$ 20,00`)
   print(`${bill10} nota(s) de R$ 10,00`)
   print(`${bill5} nota(s) de R$ 5,00`)
   print(`${bill2} nota(s) de R$ 2,00`)
   print(`${bill1} nota(s) de R$ 1,00`)
}

main()