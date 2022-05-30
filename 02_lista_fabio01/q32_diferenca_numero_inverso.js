import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const start_number = Number(input("Digite um número de 3 algarismos: "))

   //Processamento
   const digit1 = Math.trunc(start_number / 100)
   const remainder = start_number % 100
   const digit2 = Math.trunc(remainder / 10)
   const digit3 = remainder % 10
   
   const inverse_number = (digit3 * 100) + (digit2 * 10) + digit1
   const final_number = start_number - inverse_number

   //Saída
   print(`A diferença entre ${start_number} e seu inverso ${inverse_number} é: ${final_number}.`)
    
}

main()