import { print, input } from '../io_utils.js'


function main (){
    //Entrada
    const start_time = Number(input("Digite o tempo em minutos: "))
    
    //Processamento
    const time_hour = Math.trunc(start_time / 60)
    const time_minute = start_time - (time_hour * 60)
    
    const hour_hh = time_hour.toString().padStart(2,"0") //Transforma horas e minutos no formato hh:mm
    const minute_mm = time_minute.toString().padStart(2,"0")

    //Saída
    print(`A quantidade de horas e minutos é: ${hour_hh}:${minute_mm}.`)

}

main()