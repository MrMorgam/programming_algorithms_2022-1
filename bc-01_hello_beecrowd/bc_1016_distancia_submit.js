var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const distance = Number(lines[0])

   const time = distance * 2

   console.log(`${time} minutos`)
}

main()