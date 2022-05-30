import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const start_time = Number(input("Digite o tempo em dias: "))

   //Processamento
   const time_week = Math.trunc(start_time / 7)
   const time_day = start_time % 7

   //Saída
   print(`O tempo total é: ${time_week} semanas e ${time_day} dias.`)
    
}

main()