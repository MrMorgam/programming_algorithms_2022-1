import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const side = Number(input("Digite a medida do lado do quadrado: "))
   
   //Processamento
   const area = side ** 2

   //Saída
   print(`A área do quadrado é: ${area}.`)
    
}

main()