import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const value = Number(input("Digite o valor (em R$): "))

   //Processamento
   const bill50 = Math.trunc(value / 50)
   const remainder1 = value % 50
   const bill20 = Math.trunc(remainder1 / 20)
   const remainder2 = remainder1 % 20
   const bill10 = Math.trunc(remainder2 / 10)
   const remainder3 = remainder2 % 10
   const bill5 = Math.trunc(remainder3 / 5)
   const bill1 = remainder3 % 5
    


   //Saída
   print(`A quantidade de notas de 50 reais a ser(em) redebida(s) é: ${bill50}.`)
   print(`A quantidade de notas de 20 reais a ser(em) redebida(s) é: ${bill20}.`)
   print(`A quantidade de notas de 10 reais a ser(em) redebida(s) é: ${bill10}.`)
   print(`A quantidade de notas de 5 reais a ser(em) redebida(s) é: ${bill5}.`)
   print(`A quantidade de notas de 1 reais a ser(em) redebida(s) é: ${bill1}.`)

}

main()