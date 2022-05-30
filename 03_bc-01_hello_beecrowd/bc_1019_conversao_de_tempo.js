import { print, input } from '../io_utils.js'


function main (){
   const time = Number(input('Digite o tempo em segundos: '))
   
   const hour = Math.trunc(time / 3600)
   const remainder = time % 3600
   const minute = Math.trunc(remainder / 60)
   const second = remainder % 60

   print(`Tempo total: ${hour}:${minute}:${second}`)
}

main()