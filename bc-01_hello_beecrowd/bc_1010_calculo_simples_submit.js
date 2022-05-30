var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const line1 = lines[0]
   const line2 = lines[1]
   
   const values1 = line1.split(' ')
   const part1 = Number(values1[0])
   const number1 = Number(values1[1])
   const price1 = Number(values1[2])
   
   const values2 = line2.split(' ')
   const part2 = Number(values2[0])
   const number2 = Number(values2[1])
   const price2 = Number(values2[2])

   const total = (number1 * price1) + (number2 * price2)

   console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
}

main()