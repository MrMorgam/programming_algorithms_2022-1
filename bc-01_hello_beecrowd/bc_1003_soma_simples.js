import { print, input } from '../io_utils.js'


function main (){
   const a = Number(input('Digite um valor para a variável A: '))
   const b = Number(input('Digite um valor para a variável B: '))

   const sum = a + b

   print(`SOMA = ${sum}`)
}

main()