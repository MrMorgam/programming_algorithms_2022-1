import { print, input } from '../io_utils.js'


function main (){
   const value = Number(input('Digite o valor: '))
   
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
   const coin100 = Math.trunc(remainder5 % 2)
   
   const valueDecimal = Math.trunc((value - Math.trunc(value)) * 100)
   const coin50 = Math.trunc(valueDecimal / 50)
   const remainder6 = valueDecimal % 50
   const coin25 = Math.trunc(remainder6 / 25)
   const remainder7 = remainder6 % 25
   const coin10 = Math.trunc(remainder7 / 10)
   const remainder8 = remainder7 % 10
   const coin5 = Math.trunc(remainder8 / 5)
   const coin1 = Math.trunc(remainder8 % 5)

   print(`NOTAS:`)
   print(`${bill100} nota(s) de R$ 100.00`)
   print(`${bill50} nota(s) de R$ 50.00`)
   print(`${bill20} nota(s) de R$ 20.00`)
   print(`${bill10} nota(s) de R$ 10.00`)
   print(`${bill5} nota(s) de R$ 5.00`)
   print(`${bill2} nota(s) de R$ 2.00`)

   print(`MOEDAS:`)
   print(`${coin100} moeda(s) de R$ 1.00`)
   print(`${coin50} moeda(s) de R$ 0.50`)
   print(`${coin25} moeda(s) de R$ 0.25`)
   print(`${coin10} moeda(s) de R$ 0.10`)
   print(`${coin5} moeda(s) de R$ 0.05`)
   print(`${coin1} moeda(s) de R$ 0.01`)
}

main()