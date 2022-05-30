var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const line1 = lines[0]
   
   const values1 = line1.split(' ')
   const a = Number(values1[0])
   const b = Number(values1[1])
   const c = Number(values1[2])

   const biggestAB = (a + b + Math.abs(a - b)) / 2
   const biggest = (biggestAB + c + Math.abs(biggestAB - c)) / 2

   console.log(`${biggest} eh o maior`)
}

main()