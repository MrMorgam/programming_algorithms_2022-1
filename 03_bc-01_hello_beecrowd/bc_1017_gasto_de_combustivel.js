import { print, input } from '../io_utils.js'


function main (){
   const time = Number(input('Digite o tempo da viagem (em horas): '))
   const avgSpeed = Number(input('Digite a velocidade média (em km/h): '))

   const distance = time * avgSpeed
   const comsuption = distance / 12
   
   print(`CONSUMO: ${comsuption.toFixed(3)} l`)
}

main()