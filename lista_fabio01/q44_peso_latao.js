import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const brass_weight = Number(input("Digite o peso do latão (em kg): "))

   //Processamento
   const copper_weight = brass_weight * 0.7
   const zinc_weight = brass_weight * 0.3

   //Saída
   print(`O peso do cobre que constitui o latão é: ${copper_weight} kg.`)
   print(`O peso do zinco que constitui o latão é: ${zinc_weight} kg.`)

}

main()