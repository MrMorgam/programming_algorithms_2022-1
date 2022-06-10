import { print, input } from '../io_utils.js'


function main (){
   const line1 = input('Digite valores para as coordenadas x e y do ponto 1: ')
   const line2 = input('Digite valores para as coordenadas x e y do ponto 2: ')
   
   const values1 = line1.split(' ')
   const x1 = Number(values1[0])
   const y1 = Number(values1[1])
   
   const values2 = line2.split(' ')
   const x2 = Number(values2[0])
   const y2 = Number(values2[1])

   const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

   print(`DISTANCIA = ${distance.toFixed(4)}`)
}

main()