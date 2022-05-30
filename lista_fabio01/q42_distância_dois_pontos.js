import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const coordinate_x1 = Number(input("Digite a coordenada x do ponto 1: "))
   const coordinate_y1 = Number(input("Digite a coordenada y do ponto 1: "))
   const coordinate_x2 = Number(input("Digite a coordenada x do ponto 2: "))
   const coordinate_y2 = Number(input("Digite a coordenada y do ponto 2: "))

   //Processamento
   const distance = Math.sqrt(((coordinate_x2 - coordinate_x1) ** 2) + ((coordinate_y2 - coordinate_y1) ** 2))

   //Saída
   print(`A distância entre os pontos 1 e 2 é: ${distance.toFixed(2)}.`)
    
}

main()