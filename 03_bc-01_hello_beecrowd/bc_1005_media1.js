import { print, input } from '../io_utils.js'


function main (){
   const grade1 = Number(input('Digite a primeira nota: '))
   const grade2 = Number(input('Digite a segunda nota: '))

   const mean = ((grade1 * 3.5) + (grade2 * 7.5)) / 11

   print(`MEDIA = ${mean.toFixed(5)}`)
}

main()