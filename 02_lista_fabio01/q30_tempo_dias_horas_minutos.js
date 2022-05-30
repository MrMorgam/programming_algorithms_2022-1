import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const start_time = Number(input("Digite o tempo em minutos: "))

   //Processamento
   const time_day = Math.trunc(start_time / 1440)
   const remainder = start_time % 1440
   const time_hour = Math.trunc(remainder / 60)
   const time_minute = remainder % 60

   //Saída
   print(`O tempo total é: ${time_day} dia(s), ${time_hour} hora(s), ${time_minute} minuto(s).`)
    
}

main()