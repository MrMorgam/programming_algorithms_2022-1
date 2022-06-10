var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const distance = Number(lines[0])
   const fuel = Number(lines[1])

   const avgConsumption = distance / fuel

   console.log(`${avgConsumption.toFixed(3)} km/l`)
}

main()