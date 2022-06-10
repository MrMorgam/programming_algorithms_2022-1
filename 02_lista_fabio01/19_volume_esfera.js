import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const radius = Number(input("Digite a medida do raio da esfera: "))
   
   //Processamento
   const volume = (4 * Math.PI * (radius ** 3)) / 3

   //Saída
   print(`O volume da esfera é: ${volume}.`)
    
}

main()