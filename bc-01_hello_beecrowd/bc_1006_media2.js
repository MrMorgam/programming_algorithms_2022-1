import { print, input } from '../io_utils.js'


function main (){
   const grade1 = Number(input('Digite a primeira nota: '))
   const grade2 = Number(input('Digite a segunda nota: '))
   const grade3 = Number(input('Digite a terceira nota: '))
    
   const mean = ((grade1 * 2) + (grade2 * 3) + (grade3 * 5)) / 10
    
   print(`MEDIA = ${mean.toFixed(1)}`)
}

main()