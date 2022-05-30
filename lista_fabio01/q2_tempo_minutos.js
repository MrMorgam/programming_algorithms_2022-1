import { print, input } from '../io_utils.js'


function main (){
  //Entrada
  const time_hour = Number(input("Digite a quantidade de horas: "))
  const time_minute =  Number(input("Digite a quantidade de minutos: "))

  //Processamento
  const final_time = (time_hour * 60) + time_minute

  //Saída
  print(`A quantidade total de minutos é: ${final_time}.`)

}

main()