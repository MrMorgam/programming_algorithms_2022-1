import { print, input } from '../io_utils.js'


function main (){
   const distance = Number(input('Digite a distância do carro Y para o carro X (em km): '))

   const time = distance * 2

   print(`TEMPO: ${time} minutos`)
}

main()