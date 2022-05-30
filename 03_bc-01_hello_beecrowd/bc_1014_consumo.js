import { print, input } from '../io_utils.js'


function main (){
   const distance = Number(input('Digite a distância total percorrida (em km): '))
   const fuel = Number(input('Digite o total de combustível gasto (em l): '))

   const avgConsumption = distance / fuel

   print(`${avgConsumption.toFixed(3)} km/l`)
}

main()