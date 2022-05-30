import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const base = Number(input("Digite a medida da base do triângulo: "))
   const height = Number(input("Digite a medida da altura do triângulo: "))

   //Processamento
   const area = (base * height) / 2

   //Saída
   print(`A área do triângulo é: ${area}.`)
    
}

main()