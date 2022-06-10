import { print, input } from '../io_utils.js'


function main (){
   const a = Number(input('Digite um valor para a variável A: '))
   const b = Number(input('Digite um valor para a variável B: '))

   const prod = a * b

   print(`PROD = ${prod}`)
}

main()