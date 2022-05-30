import {input} from '../io_utils.js'

function main(){
    // Input
    const [startHour, startMinute] = input('Digite o horário do começo do jogo (no formato hh:mm): ').split(':').map(Number)
    const [endHour, endMinute] = input('Digite o horário do fim do jogo (no formato hh:mm): ').split(':').map(Number)

    // Processing
    const [finalHour, finalMinute] = calc_duration(startHour, startMinute, endHour, endMinute)

    // Output
    if(startHour > 23 || startHour < 0 || startMinute > 59 || startMinute < 0){
        console.log('Horário do início de jogo inválido')
    }else if(endHour > 23 || endHour < 0 || endMinute > 59 || endMinute < 0){
        console.log('Horário do fim de jogo inválido')
    }else{
    console.log(`Duração total do jogo: ${finalHour} hora(s) e ${finalMinute} minuto(s)`)
    }
}

function calc_duration(hour_start, minute_start, hour_end, minute_end){
    let total_hour
    let total_minute
    
    if(hour_end < hour_start && minute_end >= minute_start){
        total_hour = (24 - hour_start) + hour_end
        total_minute = minute_end - minute_start
    }else if(hour_end < hour_start && minute_end < minute_start){
        total_hour = (24 - hour_start) + (hour_end - 1)
        total_minute = (minute_end + 60) - minute_start
    }else if(hour_end === hour_start && minute_end === minute_start){
        total_hour = 24
        total_minute = 0
    }else if(hour_end === hour_start && minute_end < minute_start){
        total_hour = 23
        total_minute = (minute_end + 60) - minute_start
    }else if(hour_end > hour_start && minute_end < minute_start){
        total_hour = (hour_end - 1) - hour_start
        total_minute = (minute_end + 60) - minute_start
    }else{
        total_hour = hour_end - hour_start
        total_minute = minute_end - minute_start
    }

    return [total_hour, total_minute]
}

main()