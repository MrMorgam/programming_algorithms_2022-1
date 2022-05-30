import { print, input } from '../io_utils.js'


function main (){
   const radius = Number(input('Digite o raio da circunferência: '))
   
   const PI = 3.14159
   const area = PI * (radius ** 2)

   print(`A=${area.toFixed(4)}`)
}

main()