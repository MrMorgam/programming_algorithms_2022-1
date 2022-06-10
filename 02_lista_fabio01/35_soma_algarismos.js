import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const number = Number(input("Digite um número de 4 dígitos: "))

   //Processamento
   const digit1 = Math.trunc(number / 1000)
   const remainder1 = number % 1000
   const digit2 = Math.trunc(remainder1 / 100)
   const remainder2 = remainder1 % 100
   const digit3 = Math.trunc(remainder2 / 10)
   const digit4 = remainder2 % 10
   
   const sum = digit1 + digit2 + digit3 + digit4

   //Saída
   print(`A soma dos algarismos de ${number} é: ${sum}.`)
    
}

main()