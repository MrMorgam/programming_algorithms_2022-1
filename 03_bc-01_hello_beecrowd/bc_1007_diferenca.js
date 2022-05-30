import { print, input } from '../io_utils.js'


function main (){
   const a = Number(input('Digite um valor inteiro para a variável A: '))
   const b = Number(input('Digite um valor inteiro para a variável B: '))
   const c = Number(input('Digite um valor inteiro para a variável C: '))
   const d = Number(input('Digite um valor inteiro para a variável D: '))

   const diff = (a * b - c * d)

   print(`DIFERENCA = ${diff}`)
}

main()