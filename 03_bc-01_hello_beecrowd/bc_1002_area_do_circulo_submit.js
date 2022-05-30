var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const radius = Number(lines[0])
   
   const PI = 3.14159
   const area = PI * (radius ** 2)

   console.log(`A=${area.toFixed(4)}`)
}

main()