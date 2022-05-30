var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const name = lines[0]
   const salary = Number(lines[1])
   const sales = Number(lines[2])

   const total = salary + (sales * 0.15)

   console.log(`TOTAL = R$ ${total.toFixed(2)}`)
}

main()