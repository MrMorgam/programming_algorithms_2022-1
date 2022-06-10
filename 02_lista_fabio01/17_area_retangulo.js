import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const length = Number(input("Digite a medida da base do retângulo: "))
   const width = Number(input("Digite a medida da altura do retângulo: "))

   //Processamento
   const area = length * width

   //Saída
   print(`A área do retângulo é: ${area}.`)
    
}

main()