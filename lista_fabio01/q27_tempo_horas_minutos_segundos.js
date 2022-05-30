import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const start_time = Number(input("Digite o tempo em segundos: "))

   //Processamento
   const time_hour = Math.trunc(start_time / 3600)
   const remainder = start_time % 3600
   const time_minute = Math.trunc(remainder / 60)
   const time_seconds = remainder % 60 

   const hour_hh = time_hour.toString().padStart(2,"0") //Transforma horas, minutos e segundos no formato hh:mm:ss
   const minute_mm = time_minute.toString().padStart(2,"0")
   const second_ss = time_seconds.toString().padStart(2,"0")

   //Saída
   print(`O tempo total é: ${hour_hh}:${minute_mm}:${second_ss}.`)
    
}

main()