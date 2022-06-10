import { print, input } from '../io_utils.js'


function main (){
   const radius = Number(input('Digite o raio da esfera: '))

   const PI = 3.14159
   const volume = (4 / 3) * PI * (radius ** 3)

   print(`VOLUME = ${volume.toFixed(3)}`)
}

main()