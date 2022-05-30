import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const binary_number = Number(input("Digite um número binário de 4 bits: "))

   //Processamentos
   const digit1 = Math.trunc(binary_number / 1000)
   const remainder1 = binary_number % 1000
   const digit2 = Math.trunc(remainder1 / 100)
   const remainder2 = remainder1 % 100
   const digit3 = Math.trunc(remainder2 / 10)
   const digit4 = remainder2 % 10

   
   const decimal_number = (digit1 * 8) + (digit2 * 4) + (digit3 * 2) + digit4

   //Saída
   print(`O número na base decimal é: ${decimal_number}.`)
    
}

main()