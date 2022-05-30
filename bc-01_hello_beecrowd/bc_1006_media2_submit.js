var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const a = Number(lines[0])
   const b = Number(lines[1])
   const c = Number(lines[2])
    
   const mean = ((a * 2) + (b * 3) + (c * 5)) / 10
    
   console.log(`MEDIA = ${mean.toFixed(1)}`)
}

main()