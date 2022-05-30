var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const line1 = lines[0]
   const line2 = lines[1]
   
   const values1 = line1.split(' ')
   const x1 = Number(values1[0])
   const y1 = Number(values1[1])
   
   const values2 = line2.split(' ')
   const x2 = Number(values2[0])
   const y2 = Number(values2[1])

   const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

   console.log(`${distance.toFixed(4)}`)
}

main()