var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const a = Number(lines[0])
   const b = Number(lines[1])

   const mean = ((a * 3.5) + (b * 7.5)) / 11

   console.log(`MEDIA = ${mean.toFixed(5)}`)
}

main()