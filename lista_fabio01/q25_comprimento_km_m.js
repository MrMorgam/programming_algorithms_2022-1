import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const start_length = Number(input("Digite o comprimento em metros: "))

   //Processamento
   const length_km = Math.trunc(start_length / 1000)
   const length_metre = start_length % 1000


   //Saída
   print(`O comprimento total é: ${length_km} km e ${length_metre} m.`)
    
}

main()