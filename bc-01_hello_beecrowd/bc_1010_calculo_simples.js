import { print, input } from '../io_utils.js'


function main (){
   const line1 = input('Digite o código, o quantidade e o preço da peça 1: ')
   const line2 = input('Digite o código, o quantidade e o preço da peça 2: ')
   
   const values1 = line1.split(' ')
   const part1 = Number(values1[0])
   const number1 = Number(values1[1])
   const price1 = Number(values1[2])
   
   const values2 = line2.split(' ')
   const part2 = Number(values2[0])
   const number2 = Number(values2[1])
   const price2 = Number(values2[2])
   const total = (number1 * price1) + (number2 * price2)

   print(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
}

main()