import { print, input } from '../io_utils.js'


function main (){
   const number = Number(input('Digite o número do funcionário: '))
   const hours = Number(input('Digite o número de horas trabalhadas: '))
   const wage = Number(input('Digite o valor recebido por hora: '))
   
   const salary = hours * wage

   print(`NUMBER = ${number}`)
   print(`SALARY = U$ ${salary.toFixed(2)}`)
}

main()