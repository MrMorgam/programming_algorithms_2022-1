import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const start_time = Number(input("Digite o tempo em horas: "))

   //Processamento
   const time_week = Math.trunc(start_time / 168)
   const remainder = start_time % 168
   const time_day = Math.trunc(remainder / 24)
   const time_hour = remainder % 24

   //Saída
   print(`O tempo total é: ${time_week} semana(s), ${time_day} dia(s) e ${time_hour} hora(s).`)
    
}

main()