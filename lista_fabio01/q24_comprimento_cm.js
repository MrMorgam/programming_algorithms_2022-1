import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const length_metre = Number(input("Digite o comprimento em metros: "))

   //Processamento
   const length_cm = length_metre * 100

   //Saída
   print(`O comprimento em centímetros é: ${length_cm} cm.`)
    
}

main()