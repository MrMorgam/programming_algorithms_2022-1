import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const weight_kg = Number(input("Digite o peso em kg: "))

   //Processamento
   const weight_gram = weight_kg * 1000

   //Saída
   print(`O peso em gramas é: ${weight_gram} g.`)
    
}

main()