import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const age = Number(input('Digite a idade em dias: '))

   //Processamento
   const year = Math.trunc(age / 365)
   const remainder = age % 365
   const month = Math.trunc(remainder / 30)
   const day = remainder % 30

   //Saída
   print('Idade total:')
   print(`${year} ano(s)`)
   print(`${month} mes(es)`)
   print(`${day} dia(s)`)
       
}

main()