import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const number_a = Number(input("Digite um número A: "))
   const number_b = Number(input("Digite um número B: "))
   const number_c = Number(input("Digite um número C: "))

   //Processamento
   const value_r = (number_a + number_b) ** 2
   const value_s = (number_b + number_c) ** 2
   const value_d =  (value_r + value_s) / 2

   //Saída
   print(`O valor de R na expressão é: ${value_r}.`)
   print(`O valor de S na expressão é: ${value_s}.`)
   print(`O valor da expressão D é: ${value_d}.`)
    
}

main()