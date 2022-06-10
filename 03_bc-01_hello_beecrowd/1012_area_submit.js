var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const line1 = lines[0]
   
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

   console.log(`TRIANGULO: ${triangle.toFixed(3)}`)
   console.log(`CIRCULO: ${circle.toFixed(3)}`)
   console.log(`TRAPEZIO: ${trapezoid.toFixed(3)}`)
   console.log(`QUADRADO: ${square.toFixed(3)}`)
   console.log(`RETANGULO: ${rectangle.toFixed(3)}`)
}

main()