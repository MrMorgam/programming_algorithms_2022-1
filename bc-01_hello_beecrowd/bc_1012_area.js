import { print, input } from '../io_utils.js'


function main (){
   const line1 = input('Digite valores para as variáveis A, B e C: ')
   
   const values1 = line1.split(' ')
   const a = Number(values1[0])
   const b = Number(values1[1])
   const c = Number(values1[2])

   const PI = 3.14159
   const triangle = (a * c) / 2
   const circle = PI * (c ** 2)
   const trapezoid = (1 / 2) * (a + b) * c
   const square = b ** 2
   const rectangle = a * b

   print(`TRIANGULO: ${triangle.toFixed(3)}`)
   print(`CIRCULO: ${circle.toFixed(3)}`)
   print(`TRAPEZIO: ${trapezoid.toFixed(3)}`)
   print(`QUADRADO: ${square.toFixed(3)}`)
   print(`RETANGULO: ${rectangle.toFixed(3)}`)
}

main()