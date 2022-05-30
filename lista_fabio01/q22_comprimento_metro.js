import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const length_km = Number(input("Digite o comprimento em km: "))

   //Processamento
   const length_metre = length_km * 1000

   //Saída
   print(`O comprimento em metros é: ${length_metre} m.`)
    
}

main()