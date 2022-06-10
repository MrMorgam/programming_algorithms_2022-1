import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const radius = Number(input("Digite a medida do raio da circunferência: "))
   
   //Processamento
   const circumference = 2 * Math.PI * radius

   //Saída
   print(`O comprimento da circunferência é: ${circumference}.`)
    
}

main()